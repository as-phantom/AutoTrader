import { Component, OnInit } from '@angular/core';
import { API } from 'aws-amplify';
import gql from 'graphql-tag';
import { Region } from 'src/API';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit (): void {
    const createRegion = async (region: string): Promise<Region> => {
      const name = region;

      const response = await API.graphql({
        query: gql`
          mutation CreateRegion($input: CreateRegionInput!) {
            createRegion(input: $input) {
              id
              name
              createdAt
              updatedAt
            }
          }
        `,
        variables: {
          input: {
            name,
          },
        },
      });

      const {
        data: { createRegion },
      } = response as { data: { createRegion: Region } };

      return createRegion;
    };

   createRegion('Plovdiv').then(console.log).catch(console.error);
   
  }
}
