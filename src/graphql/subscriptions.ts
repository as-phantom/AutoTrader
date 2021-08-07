/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
          userID
          year
          transmissionType
          description
          fuelType
          phone
          picture
          condition
          longitude
          latitude
          region
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
          userID
          year
          transmissionType
          description
          fuelType
          phone
          picture
          condition
          longitude
          latitude
          region
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
          userID
          year
          transmissionType
          description
          fuelType
          phone
          picture
          condition
          longitude
          latitude
          region
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
      year
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
      region
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
      year
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
      region
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
      year
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
      region
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
        year
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
        region
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
        year
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
        region
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
        year
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
        region
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
        year
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
        region
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
        year
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
        region
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
        year
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
        region
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
        year
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
        region
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
        year
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
        region
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
        year
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
        region
        createdAt
        updatedAt
      }
      rating
      createdAt
      updatedAt
    }
  }
`;
