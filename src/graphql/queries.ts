/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      picture
      lastName
      firstName
      ads {
        items {
          id
          year
          userID
          price
          brand
          model
          color
          engine
          fuelType
          description
          transmissionType
          createdAt
          updatedAt
        }
        nextToken
      }
      ratings {
        items {
          id
          adID
          userID
          rating
          createdAt
          updatedAt
        }
        nextToken
      }
      favorites {
        items {
          id
          adID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        picture
        lastName
        firstName
        ads {
          nextToken
        }
        ratings {
          nextToken
        }
        favorites {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAd = /* GraphQL */ `
  query GetAd($id: ID!) {
    getAd(id: $id) {
      id
      year
      userID
      price
      brand
      model
      color
      engine
      fuelType
      description
      transmissionType
      user {
        id
        email
        picture
        lastName
        firstName
        ads {
          nextToken
        }
        ratings {
          nextToken
        }
        favorites {
          nextToken
        }
        createdAt
        updatedAt
      }
      ratings {
        items {
          id
          adID
          userID
          rating
          createdAt
          updatedAt
        }
        nextToken
      }
      pictures {
        items {
          id
          adID
          url
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAds = /* GraphQL */ `
  query ListAds($filter: ModelAdFilterInput, $limit: Int, $nextToken: String) {
    listAds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        year
        userID
        price
        brand
        model
        color
        engine
        fuelType
        description
        transmissionType
        user {
          id
          email
          picture
          lastName
          firstName
          createdAt
          updatedAt
        }
        ratings {
          nextToken
        }
        pictures {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPicture = /* GraphQL */ `
  query GetPicture($id: ID!) {
    getPicture(id: $id) {
      id
      adID
      url
      ad {
        id
        year
        userID
        price
        brand
        model
        color
        engine
        fuelType
        description
        transmissionType
        user {
          id
          email
          picture
          lastName
          firstName
          createdAt
          updatedAt
        }
        ratings {
          nextToken
        }
        pictures {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPictures = /* GraphQL */ `
  query ListPictures(
    $filter: ModelPictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        adID
        url
        ad {
          id
          year
          userID
          price
          brand
          model
          color
          engine
          fuelType
          description
          transmissionType
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFavorite = /* GraphQL */ `
  query GetFavorite($id: ID!) {
    getFavorite(id: $id) {
      id
      adID
      userID
      ad {
        id
        year
        userID
        price
        brand
        model
        color
        engine
        fuelType
        description
        transmissionType
        user {
          id
          email
          picture
          lastName
          firstName
          createdAt
          updatedAt
        }
        ratings {
          nextToken
        }
        pictures {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        email
        picture
        lastName
        firstName
        ads {
          nextToken
        }
        ratings {
          nextToken
        }
        favorites {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFavorites = /* GraphQL */ `
  query ListFavorites(
    $filter: ModelFavoriteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavorites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        adID
        userID
        ad {
          id
          year
          userID
          price
          brand
          model
          color
          engine
          fuelType
          description
          transmissionType
          createdAt
          updatedAt
        }
        user {
          id
          email
          picture
          lastName
          firstName
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRating = /* GraphQL */ `
  query GetRating($id: ID!) {
    getRating(id: $id) {
      id
      adID
      userID
      rating
      ad {
        id
        year
        userID
        price
        brand
        model
        color
        engine
        fuelType
        description
        transmissionType
        user {
          id
          email
          picture
          lastName
          firstName
          createdAt
          updatedAt
        }
        ratings {
          nextToken
        }
        pictures {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        email
        picture
        lastName
        firstName
        ads {
          nextToken
        }
        ratings {
          nextToken
        }
        favorites {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRatings = /* GraphQL */ `
  query ListRatings(
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        adID
        userID
        rating
        ad {
          id
          year
          userID
          price
          brand
          model
          color
          engine
          fuelType
          description
          transmissionType
          createdAt
          updatedAt
        }
        user {
          id
          email
          picture
          lastName
          firstName
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
