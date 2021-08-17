/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRegion = /* GraphQL */ `
  query GetRegion($id: ID!) {
    getRegion(id: $id) {
      id
      name
      ads {
        items {
          id
          make
          model
          color
          engine
          price
          year
          mileage
          userID
          regionID
          transmission
          currency
          description
          fuel
          phone
          picture
          condition
          longitude
          latitude
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
export const listRegions = /* GraphQL */ `
  query ListRegions(
    $filter: ModelRegionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        ads {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      favorites {
        items {
          id
          userID
          adID
          createdAt
          updatedAt
        }
        nextToken
      }
      ratings {
        items {
          id
          userID
          adID
          rating
          createdAt
          updatedAt
        }
        nextToken
      }
      ads {
        items {
          id
          make
          model
          color
          engine
          price
          year
          mileage
          userID
          regionID
          transmission
          currency
          description
          fuel
          phone
          picture
          condition
          longitude
          latitude
          createdAt
          updatedAt
        }
        nextToken
      }
      firstName
      lastName
      picture
      email
      cognitoID
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
        favorites {
          nextToken
        }
        ratings {
          nextToken
        }
        ads {
          nextToken
        }
        firstName
        lastName
        picture
        email
        cognitoID
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
      make
      model
      color
      engine
      price
      year
      mileage
      userID
      user {
        id
        favorites {
          nextToken
        }
        ratings {
          nextToken
        }
        ads {
          nextToken
        }
        firstName
        lastName
        picture
        email
        cognitoID
        createdAt
        updatedAt
      }
      regionID
      region {
        id
        name
        ads {
          nextToken
        }
        createdAt
        updatedAt
      }
      favorites {
        items {
          id
          userID
          adID
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
      ratings {
        items {
          id
          userID
          adID
          rating
          createdAt
          updatedAt
        }
        nextToken
      }
      transmission
      currency
      description
      fuel
      phone
      picture
      condition
      longitude
      latitude
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
        make
        model
        color
        engine
        price
        year
        mileage
        userID
        user {
          id
          firstName
          lastName
          picture
          email
          cognitoID
          createdAt
          updatedAt
        }
        regionID
        region {
          id
          name
          createdAt
          updatedAt
        }
        favorites {
          nextToken
        }
        pictures {
          nextToken
        }
        ratings {
          nextToken
        }
        transmission
        currency
        description
        fuel
        phone
        picture
        condition
        longitude
        latitude
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
      ad {
        id
        make
        model
        color
        engine
        price
        year
        mileage
        userID
        user {
          id
          firstName
          lastName
          picture
          email
          cognitoID
          createdAt
          updatedAt
        }
        regionID
        region {
          id
          name
          createdAt
          updatedAt
        }
        favorites {
          nextToken
        }
        pictures {
          nextToken
        }
        ratings {
          nextToken
        }
        transmission
        currency
        description
        fuel
        phone
        picture
        condition
        longitude
        latitude
        createdAt
        updatedAt
      }
      url
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
        ad {
          id
          make
          model
          color
          engine
          price
          year
          mileage
          userID
          regionID
          transmission
          currency
          description
          fuel
          phone
          picture
          condition
          longitude
          latitude
          createdAt
          updatedAt
        }
        url
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
      userID
      user {
        id
        favorites {
          nextToken
        }
        ratings {
          nextToken
        }
        ads {
          nextToken
        }
        firstName
        lastName
        picture
        email
        cognitoID
        createdAt
        updatedAt
      }
      adID
      ad {
        id
        make
        model
        color
        engine
        price
        year
        mileage
        userID
        user {
          id
          firstName
          lastName
          picture
          email
          cognitoID
          createdAt
          updatedAt
        }
        regionID
        region {
          id
          name
          createdAt
          updatedAt
        }
        favorites {
          nextToken
        }
        pictures {
          nextToken
        }
        ratings {
          nextToken
        }
        transmission
        currency
        description
        fuel
        phone
        picture
        condition
        longitude
        latitude
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
        userID
        user {
          id
          firstName
          lastName
          picture
          email
          cognitoID
          createdAt
          updatedAt
        }
        adID
        ad {
          id
          make
          model
          color
          engine
          price
          year
          mileage
          userID
          regionID
          transmission
          currency
          description
          fuel
          phone
          picture
          condition
          longitude
          latitude
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
      userID
      user {
        id
        favorites {
          nextToken
        }
        ratings {
          nextToken
        }
        ads {
          nextToken
        }
        firstName
        lastName
        picture
        email
        cognitoID
        createdAt
        updatedAt
      }
      adID
      ad {
        id
        make
        model
        color
        engine
        price
        year
        mileage
        userID
        user {
          id
          firstName
          lastName
          picture
          email
          cognitoID
          createdAt
          updatedAt
        }
        regionID
        region {
          id
          name
          createdAt
          updatedAt
        }
        favorites {
          nextToken
        }
        pictures {
          nextToken
        }
        ratings {
          nextToken
        }
        transmission
        currency
        description
        fuel
        phone
        picture
        condition
        longitude
        latitude
        createdAt
        updatedAt
      }
      rating
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
        userID
        user {
          id
          firstName
          lastName
          picture
          email
          cognitoID
          createdAt
          updatedAt
        }
        adID
        ad {
          id
          make
          model
          color
          engine
          price
          year
          mileage
          userID
          regionID
          transmission
          currency
          description
          fuel
          phone
          picture
          condition
          longitude
          latitude
          createdAt
          updatedAt
        }
        rating
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
