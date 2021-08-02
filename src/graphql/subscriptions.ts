/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateAd = /* GraphQL */ `
  subscription OnCreateAd {
    onCreateAd {
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
export const onUpdateAd = /* GraphQL */ `
  subscription OnUpdateAd {
    onUpdateAd {
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
export const onDeleteAd = /* GraphQL */ `
  subscription OnDeleteAd {
    onDeleteAd {
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
export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture {
    onCreatePicture {
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
export const onUpdatePicture = /* GraphQL */ `
  subscription OnUpdatePicture {
    onUpdatePicture {
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
export const onDeletePicture = /* GraphQL */ `
  subscription OnDeletePicture {
    onDeletePicture {
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
export const onCreateFavorite = /* GraphQL */ `
  subscription OnCreateFavorite {
    onCreateFavorite {
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
export const onUpdateFavorite = /* GraphQL */ `
  subscription OnUpdateFavorite {
    onUpdateFavorite {
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
export const onDeleteFavorite = /* GraphQL */ `
  subscription OnDeleteFavorite {
    onDeleteFavorite {
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
export const onCreateRating = /* GraphQL */ `
  subscription OnCreateRating {
    onCreateRating {
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
export const onUpdateRating = /* GraphQL */ `
  subscription OnUpdateRating {
    onUpdateRating {
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
export const onDeleteRating = /* GraphQL */ `
  subscription OnDeleteRating {
    onDeleteRating {
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
