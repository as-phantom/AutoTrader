import { Injectable } from '@angular/core';
import { API, Auth } from 'aws-amplify';
import gql from 'graphql-tag';
import { filter } from 'rxjs/operators';
import { User } from '../../../../API';
import { AuthFacade } from '../../../store/facades/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly authFacade: AuthFacade) {
    this.authFacade.currentAuthenticatedUser$
      // Subscribe only when user is authenticated
      .pipe(filter((currentAuthenticatedUser) => Boolean(currentAuthenticatedUser)))
      .subscribe(async (currentAuthenticatedUser) => {
        let {
          attributes: { sub: cognitoID, email, given_name: firstName, picture, family_name: lastName },
          username,
        } = currentAuthenticatedUser;

        // Check if user exist in the database
        let user: User = await this.getUserByCognitoID(cognitoID);

        // If there is no user, create one
        if (!user) {
          // Picture from Facebook is actually a JSON so it requires a JSON.parse
          picture = username.startsWith('facebook') ? JSON.parse(picture).data.url : picture;

          user = await this.createUser({
            cognitoID,
            email,
            firstName,
            picture,
            lastName,
          });
        }

        // Store the user
        this.authFacade.setUser(user);
      });
  }

  public async storeCurrentAuthenticatedUser(): Promise<void> {
    try {
      const currentAuthenticatedUser: any = await Auth.currentAuthenticatedUser();

      // Need to deep copy the object because of @ngrx/store freeze error
      this.authFacade.setCurrentAuthenticatedUser(JSON.parse(JSON.stringify(currentAuthenticatedUser)));
    } catch (e) {
      this.authFacade.setCurrentAuthenticatedUser(undefined);
    }
  }

  private async getUserByCognitoID(cognitoID: string): Promise<User> {
    const response = await API.graphql({
      query: gql`
        query ListUsers($filter: ModelUserFilterInput) {
          listUsers(filter: $filter) {
            items {
              id
              firstName
              lastName
              picture
              email
              cognitoID
              createdAt
              updatedAt
            }
          }
        }
      `,
      variables: {
        filter: {
          cognitoID: {
            eq: cognitoID,
          },
        },
      },
    });

    const {
      data: {
        listUsers: { items },
      },
    } = response as { data: { listUsers: { items: User[] } } };

    const [user] = items;

    return user;
  }

  private async createUser(user: Partial<User>): Promise<User> {
    const { cognitoID, email, firstName, lastName, picture } = user;

    const response = await API.graphql({
      query: gql`
        mutation CreateUser($input: CreateUserInput!) {
          createUser(input: $input) {
            id
            firstName
            lastName
            picture
            email
            cognitoID
            createdAt
            updatedAt
          }
        }
      `,
      variables: {
        input: {
          cognitoID,
          email,
          firstName,
          lastName,
          picture,
        },
      },
    });

    const {
      data: { createUser },
    } = response as { data: { createUser: User } };

    return createUser;
  }
}
