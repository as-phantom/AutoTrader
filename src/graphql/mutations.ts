/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createAd = /* GraphQL */ `
  mutation CreateAd($input: CreateAdInput!, $condition: ModelAdConditionInput) {
    createAd(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateAd = /* GraphQL */ `
  mutation UpdateAd($input: UpdateAdInput!, $condition: ModelAdConditionInput) {
    updateAd(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteAd = /* GraphQL */ `
  mutation DeleteAd($input: DeleteAdInput!, $condition: ModelAdConditionInput) {
    deleteAd(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const createPicture = /* GraphQL */ `
  mutation CreatePicture(
    $input: CreatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    createPicture(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      url
      createdAt
      updatedAt
    }
  }
`;
export const updatePicture = /* GraphQL */ `
  mutation UpdatePicture(
    $input: UpdatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    updatePicture(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      url
      createdAt
      updatedAt
    }
  }
`;
export const deletePicture = /* GraphQL */ `
  mutation DeletePicture(
    $input: DeletePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    deletePicture(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      url
      createdAt
      updatedAt
    }
  }
`;
export const createFavorite = /* GraphQL */ `
  mutation CreateFavorite(
    $input: CreateFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    createFavorite(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFavorite = /* GraphQL */ `
  mutation UpdateFavorite(
    $input: UpdateFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    updateFavorite(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFavorite = /* GraphQL */ `
  mutation DeleteFavorite(
    $input: DeleteFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    deleteFavorite(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createRating = /* GraphQL */ `
  mutation CreateRating(
    $input: CreateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    createRating(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      rating
      createdAt
      updatedAt
    }
  }
`;
export const updateRating = /* GraphQL */ `
  mutation UpdateRating(
    $input: UpdateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    updateRating(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      rating
      createdAt
      updatedAt
    }
  }
`;
export const deleteRating = /* GraphQL */ `
  mutation DeleteRating(
    $input: DeleteRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    deleteRating(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      rating
      createdAt
      updatedAt
    }
  }
`;
