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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createAd = /* GraphQL */ `
  mutation CreateAd($input: CreateAdInput!, $condition: ModelAdConditionInput) {
    createAd(input: $input, condition: $condition) {
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
export const updateAd = /* GraphQL */ `
  mutation UpdateAd($input: UpdateAdInput!, $condition: ModelAdConditionInput) {
    updateAd(input: $input, condition: $condition) {
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
export const deleteAd = /* GraphQL */ `
  mutation DeleteAd($input: DeleteAdInput!, $condition: ModelAdConditionInput) {
    deleteAd(input: $input, condition: $condition) {
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
export const createPicture = /* GraphQL */ `
  mutation CreatePicture(
    $input: CreatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    createPicture(input: $input, condition: $condition) {
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
export const updatePicture = /* GraphQL */ `
  mutation UpdatePicture(
    $input: UpdatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    updatePicture(input: $input, condition: $condition) {
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
export const deletePicture = /* GraphQL */ `
  mutation DeletePicture(
    $input: DeletePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    deletePicture(input: $input, condition: $condition) {
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
export const createFavorite = /* GraphQL */ `
  mutation CreateFavorite(
    $input: CreateFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    createFavorite(input: $input, condition: $condition) {
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
export const updateFavorite = /* GraphQL */ `
  mutation UpdateFavorite(
    $input: UpdateFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    updateFavorite(input: $input, condition: $condition) {
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
export const deleteFavorite = /* GraphQL */ `
  mutation DeleteFavorite(
    $input: DeleteFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    deleteFavorite(input: $input, condition: $condition) {
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
export const createRating = /* GraphQL */ `
  mutation CreateRating(
    $input: CreateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    createRating(input: $input, condition: $condition) {
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
export const updateRating = /* GraphQL */ `
  mutation UpdateRating(
    $input: UpdateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    updateRating(input: $input, condition: $condition) {
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
export const deleteRating = /* GraphQL */ `
  mutation DeleteRating(
    $input: DeleteRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    deleteRating(input: $input, condition: $condition) {
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
