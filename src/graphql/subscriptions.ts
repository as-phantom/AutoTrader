/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRegion = /* GraphQL */ `
  subscription OnCreateRegion {
    onCreateRegion {
      id
      name
      ads {
        items {
          id
          brand
          model
          color
          engine
          price
          year
          userID
          regionID
          transmissionType
          description
          fuelType
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
export const onUpdateRegion = /* GraphQL */ `
  subscription OnUpdateRegion {
    onUpdateRegion {
      id
      name
      ads {
        items {
          id
          brand
          model
          color
          engine
          price
          year
          userID
          regionID
          transmissionType
          description
          fuelType
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
export const onDeleteRegion = /* GraphQL */ `
  subscription OnDeleteRegion {
    onDeleteRegion {
      id
      name
      ads {
        items {
          id
          brand
          model
          color
          engine
          price
          year
          userID
          regionID
          transmissionType
          description
          fuelType
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
          brand
          model
          color
          engine
          price
          year
          userID
          regionID
          transmissionType
          description
          fuelType
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
          brand
          model
          color
          engine
          price
          year
          userID
          regionID
          transmissionType
          description
          fuelType
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
          brand
          model
          color
          engine
          price
          year
          userID
          regionID
          transmissionType
          description
          fuelType
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
export const onCreateAd = /* GraphQL */ `
  subscription OnCreateAd {
    onCreateAd {
      id
      brand
      model
      color
      engine
      price
      year
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
      transmissionType
      description
      fuelType
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
export const onUpdateAd = /* GraphQL */ `
  subscription OnUpdateAd {
    onUpdateAd {
      id
      brand
      model
      color
      engine
      price
      year
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
      transmissionType
      description
      fuelType
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
export const onDeleteAd = /* GraphQL */ `
  subscription OnDeleteAd {
    onDeleteAd {
      id
      brand
      model
      color
      engine
      price
      year
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
      transmissionType
      description
      fuelType
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
export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture {
    onCreatePicture {
      id
      adID
      ad {
        id
        brand
        model
        color
        engine
        price
        year
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
        pictures {
          nextToken
        }
        ratings {
          nextToken
        }
        transmissionType
        description
        fuelType
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
export const onUpdatePicture = /* GraphQL */ `
  subscription OnUpdatePicture {
    onUpdatePicture {
      id
      adID
      ad {
        id
        brand
        model
        color
        engine
        price
        year
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
        pictures {
          nextToken
        }
        ratings {
          nextToken
        }
        transmissionType
        description
        fuelType
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
export const onDeletePicture = /* GraphQL */ `
  subscription OnDeletePicture {
    onDeletePicture {
      id
      adID
      ad {
        id
        brand
        model
        color
        engine
        price
        year
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
        pictures {
          nextToken
        }
        ratings {
          nextToken
        }
        transmissionType
        description
        fuelType
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
export const onCreateFavorite = /* GraphQL */ `
  subscription OnCreateFavorite {
    onCreateFavorite {
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
        brand
        model
        color
        engine
        price
        year
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
        pictures {
          nextToken
        }
        ratings {
          nextToken
        }
        transmissionType
        description
        fuelType
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
export const onUpdateFavorite = /* GraphQL */ `
  subscription OnUpdateFavorite {
    onUpdateFavorite {
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
        brand
        model
        color
        engine
        price
        year
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
        pictures {
          nextToken
        }
        ratings {
          nextToken
        }
        transmissionType
        description
        fuelType
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
export const onDeleteFavorite = /* GraphQL */ `
  subscription OnDeleteFavorite {
    onDeleteFavorite {
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
        brand
        model
        color
        engine
        price
        year
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
        pictures {
          nextToken
        }
        ratings {
          nextToken
        }
        transmissionType
        description
        fuelType
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
export const onCreateRating = /* GraphQL */ `
  subscription OnCreateRating {
    onCreateRating {
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
        brand
        model
        color
        engine
        price
        year
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
        pictures {
          nextToken
        }
        ratings {
          nextToken
        }
        transmissionType
        description
        fuelType
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
export const onUpdateRating = /* GraphQL */ `
  subscription OnUpdateRating {
    onUpdateRating {
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
        brand
        model
        color
        engine
        price
        year
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
        pictures {
          nextToken
        }
        ratings {
          nextToken
        }
        transmissionType
        description
        fuelType
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
export const onDeleteRating = /* GraphQL */ `
  subscription OnDeleteRating {
    onDeleteRating {
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
        brand
        model
        color
        engine
        price
        year
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
        pictures {
          nextToken
        }
        ratings {
          nextToken
        }
        transmissionType
        description
        fuelType
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
