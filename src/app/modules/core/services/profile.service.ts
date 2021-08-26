import { Injectable } from '@angular/core';
import { API } from 'aws-amplify';
import gql from 'graphql-tag';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/API';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor() {}

  public uploadProfilePicture(userID: string, picture: string): Observable<User> {
    return from(
      API.graphql({
        query: gql`
          mutation UpdateUser($input: UpdateUserInput!) {
            updateUser(input: $input) {
              picture
            }
          }
        `,
        variables: {
          input: {
            id: userID,
            picture,
          },
        },
      }) as Promise<{ data: { updateUser: User } }>
    ).pipe(map(({ data: { updateUser } }) => updateUser));
  }

  public updateUser(userID: string, firstName: string, lastName: string): Observable<User> {
    return from(
      API.graphql({
        query: gql`
          mutation UpdateUser($input: UpdateUserInput!) {
            updateUser(input: $input) {
              firstName
              lastName
            }
          }
        `,
        variables: {
          input: {
            id: userID,
            firstName,
            lastName,
          },
        },
      }) as Promise<{ data: { updateUser: User } }>
    ).pipe(map(({ data: { updateUser } }) => updateUser));
  }
}
