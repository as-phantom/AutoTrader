/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  picture?: string | null,
  email: string,
  cognitoID: string,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  email?: ModelStringInput | null,
  cognitoID?: ModelIDInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  favorites?: ModelFavoriteConnection | null,
  ratings?: ModelRatingConnection | null,
  ads?: ModelAdConnection | null,
  firstName?: string | null,
  lastName?: string | null,
  picture?: string | null,
  email: string,
  cognitoID: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelFavoriteConnection = {
  __typename: "ModelFavoriteConnection",
  items?:  Array<Favorite | null > | null,
  nextToken?: string | null,
};

export type Favorite = {
  __typename: "Favorite",
  id: string,
  userID: string,
  user?: User | null,
  adID: string,
  ad?: Ad | null,
  createdAt: string,
  updatedAt: string,
};

export type Ad = {
  __typename: "Ad",
  id: string,
  brand: string,
  model: string,
  color: string,
  engine: number,
  price: number,
  userID: string,
  user?: User | null,
  year: number,
  pictures?: ModelPictureConnection | null,
  ratings?: ModelRatingConnection | null,
  transmissionType: TransmissionType,
  description: string,
  fuelType: FuelType,
  phone: string,
  picture: string,
  condition: Condition,
  longitude: number,
  latitude: number,
  region: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelPictureConnection = {
  __typename: "ModelPictureConnection",
  items?:  Array<Picture | null > | null,
  nextToken?: string | null,
};

export type Picture = {
  __typename: "Picture",
  id: string,
  adID: string,
  ad?: Ad | null,
  url: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelRatingConnection = {
  __typename: "ModelRatingConnection",
  items?:  Array<Rating | null > | null,
  nextToken?: string | null,
};

export type Rating = {
  __typename: "Rating",
  id: string,
  userID: string,
  user?: User | null,
  adID: string,
  ad?: Ad | null,
  rating: number,
  createdAt: string,
  updatedAt: string,
};

export enum TransmissionType {
  AUTOMATIC = "AUTOMATIC",
  MANUAL = "MANUAL",
}


export enum FuelType {
  ELECTRIC = "ELECTRIC",
  PETROL = "PETROL",
  DIESEL = "DIESEL",
  CNG = "CNG",
  LPG = "LPG",
}


export enum Condition {
  NEW = "NEW",
  USED = "USED",
}


export type ModelAdConnection = {
  __typename: "ModelAdConnection",
  items?:  Array<Ad | null > | null,
  nextToken?: string | null,
};

export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  picture?: string | null,
  email?: string | null,
  cognitoID?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateAdInput = {
  id?: string | null,
  brand: string,
  model: string,
  color: string,
  engine: number,
  price: number,
  userID: string,
  year: number,
  transmissionType: TransmissionType,
  description: string,
  fuelType: FuelType,
  phone: string,
  picture: string,
  condition: Condition,
  longitude: number,
  latitude: number,
  region: string,
};

export type ModelAdConditionInput = {
  brand?: ModelStringInput | null,
  model?: ModelStringInput | null,
  color?: ModelStringInput | null,
  engine?: ModelFloatInput | null,
  price?: ModelFloatInput | null,
  userID?: ModelIDInput | null,
  year?: ModelIntInput | null,
  transmissionType?: ModelTransmissionTypeInput | null,
  description?: ModelStringInput | null,
  fuelType?: ModelFuelTypeInput | null,
  phone?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  condition?: ModelConditionInput | null,
  longitude?: ModelFloatInput | null,
  latitude?: ModelFloatInput | null,
  region?: ModelStringInput | null,
  and?: Array< ModelAdConditionInput | null > | null,
  or?: Array< ModelAdConditionInput | null > | null,
  not?: ModelAdConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelTransmissionTypeInput = {
  eq?: TransmissionType | null,
  ne?: TransmissionType | null,
};

export type ModelFuelTypeInput = {
  eq?: FuelType | null,
  ne?: FuelType | null,
};

export type ModelConditionInput = {
  eq?: Condition | null,
  ne?: Condition | null,
};

export type UpdateAdInput = {
  id: string,
  brand?: string | null,
  model?: string | null,
  color?: string | null,
  engine?: number | null,
  price?: number | null,
  userID?: string | null,
  year?: number | null,
  transmissionType?: TransmissionType | null,
  description?: string | null,
  fuelType?: FuelType | null,
  phone?: string | null,
  picture?: string | null,
  condition?: Condition | null,
  longitude?: number | null,
  latitude?: number | null,
  region?: string | null,
};

export type DeleteAdInput = {
  id: string,
};

export type CreatePictureInput = {
  id?: string | null,
  adID: string,
  url: string,
};

export type ModelPictureConditionInput = {
  adID?: ModelIDInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelPictureConditionInput | null > | null,
  or?: Array< ModelPictureConditionInput | null > | null,
  not?: ModelPictureConditionInput | null,
};

export type UpdatePictureInput = {
  id: string,
  adID?: string | null,
  url?: string | null,
};

export type DeletePictureInput = {
  id: string,
};

export type CreateFavoriteInput = {
  id?: string | null,
  userID: string,
  adID: string,
};

export type ModelFavoriteConditionInput = {
  userID?: ModelIDInput | null,
  adID?: ModelIDInput | null,
  and?: Array< ModelFavoriteConditionInput | null > | null,
  or?: Array< ModelFavoriteConditionInput | null > | null,
  not?: ModelFavoriteConditionInput | null,
};

export type UpdateFavoriteInput = {
  id: string,
  userID?: string | null,
  adID?: string | null,
};

export type DeleteFavoriteInput = {
  id: string,
};

export type CreateRatingInput = {
  id?: string | null,
  userID: string,
  adID: string,
  rating: number,
};

export type ModelRatingConditionInput = {
  userID?: ModelIDInput | null,
  adID?: ModelIDInput | null,
  rating?: ModelIntInput | null,
  and?: Array< ModelRatingConditionInput | null > | null,
  or?: Array< ModelRatingConditionInput | null > | null,
  not?: ModelRatingConditionInput | null,
};

export type UpdateRatingInput = {
  id: string,
  userID?: string | null,
  adID?: string | null,
  rating?: number | null,
};

export type DeleteRatingInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  email?: ModelStringInput | null,
  cognitoID?: ModelIDInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelAdFilterInput = {
  id?: ModelIDInput | null,
  brand?: ModelStringInput | null,
  model?: ModelStringInput | null,
  color?: ModelStringInput | null,
  engine?: ModelFloatInput | null,
  price?: ModelFloatInput | null,
  userID?: ModelIDInput | null,
  year?: ModelIntInput | null,
  transmissionType?: ModelTransmissionTypeInput | null,
  description?: ModelStringInput | null,
  fuelType?: ModelFuelTypeInput | null,
  phone?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  condition?: ModelConditionInput | null,
  longitude?: ModelFloatInput | null,
  latitude?: ModelFloatInput | null,
  region?: ModelStringInput | null,
  and?: Array< ModelAdFilterInput | null > | null,
  or?: Array< ModelAdFilterInput | null > | null,
  not?: ModelAdFilterInput | null,
};

export type ModelPictureFilterInput = {
  id?: ModelIDInput | null,
  adID?: ModelIDInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelPictureFilterInput | null > | null,
  or?: Array< ModelPictureFilterInput | null > | null,
  not?: ModelPictureFilterInput | null,
};

export type ModelFavoriteFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  adID?: ModelIDInput | null,
  and?: Array< ModelFavoriteFilterInput | null > | null,
  or?: Array< ModelFavoriteFilterInput | null > | null,
  not?: ModelFavoriteFilterInput | null,
};

export type ModelRatingFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  adID?: ModelIDInput | null,
  rating?: ModelIntInput | null,
  and?: Array< ModelRatingFilterInput | null > | null,
  or?: Array< ModelRatingFilterInput | null > | null,
  not?: ModelRatingFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      items?:  Array< {
        __typename: "Favorite",
        id: string,
        userID: string,
        adID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ratings?:  {
      __typename: "ModelRatingConnection",
      items?:  Array< {
        __typename: "Rating",
        id: string,
        userID: string,
        adID: string,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ads?:  {
      __typename: "ModelAdConnection",
      items?:  Array< {
        __typename: "Ad",
        id: string,
        brand: string,
        model: string,
        color: string,
        engine: number,
        price: number,
        userID: string,
        year: number,
        transmissionType: TransmissionType,
        description: string,
        fuelType: FuelType,
        phone: string,
        picture: string,
        condition: Condition,
        longitude: number,
        latitude: number,
        region: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    picture?: string | null,
    email: string,
    cognitoID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      items?:  Array< {
        __typename: "Favorite",
        id: string,
        userID: string,
        adID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ratings?:  {
      __typename: "ModelRatingConnection",
      items?:  Array< {
        __typename: "Rating",
        id: string,
        userID: string,
        adID: string,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ads?:  {
      __typename: "ModelAdConnection",
      items?:  Array< {
        __typename: "Ad",
        id: string,
        brand: string,
        model: string,
        color: string,
        engine: number,
        price: number,
        userID: string,
        year: number,
        transmissionType: TransmissionType,
        description: string,
        fuelType: FuelType,
        phone: string,
        picture: string,
        condition: Condition,
        longitude: number,
        latitude: number,
        region: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    picture?: string | null,
    email: string,
    cognitoID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      items?:  Array< {
        __typename: "Favorite",
        id: string,
        userID: string,
        adID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ratings?:  {
      __typename: "ModelRatingConnection",
      items?:  Array< {
        __typename: "Rating",
        id: string,
        userID: string,
        adID: string,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ads?:  {
      __typename: "ModelAdConnection",
      items?:  Array< {
        __typename: "Ad",
        id: string,
        brand: string,
        model: string,
        color: string,
        engine: number,
        price: number,
        userID: string,
        year: number,
        transmissionType: TransmissionType,
        description: string,
        fuelType: FuelType,
        phone: string,
        picture: string,
        condition: Condition,
        longitude: number,
        latitude: number,
        region: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    picture?: string | null,
    email: string,
    cognitoID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAdMutationVariables = {
  input: CreateAdInput,
  condition?: ModelAdConditionInput | null,
};

export type CreateAdMutation = {
  createAd?:  {
    __typename: "Ad",
    id: string,
    brand: string,
    model: string,
    color: string,
    engine: number,
    price: number,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      favorites?:  {
        __typename: "ModelFavoriteConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      picture?: string | null,
      email: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    year: number,
    pictures?:  {
      __typename: "ModelPictureConnection",
      items?:  Array< {
        __typename: "Picture",
        id: string,
        adID: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ratings?:  {
      __typename: "ModelRatingConnection",
      items?:  Array< {
        __typename: "Rating",
        id: string,
        userID: string,
        adID: string,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    transmissionType: TransmissionType,
    description: string,
    fuelType: FuelType,
    phone: string,
    picture: string,
    condition: Condition,
    longitude: number,
    latitude: number,
    region: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAdMutationVariables = {
  input: UpdateAdInput,
  condition?: ModelAdConditionInput | null,
};

export type UpdateAdMutation = {
  updateAd?:  {
    __typename: "Ad",
    id: string,
    brand: string,
    model: string,
    color: string,
    engine: number,
    price: number,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      favorites?:  {
        __typename: "ModelFavoriteConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      picture?: string | null,
      email: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    year: number,
    pictures?:  {
      __typename: "ModelPictureConnection",
      items?:  Array< {
        __typename: "Picture",
        id: string,
        adID: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ratings?:  {
      __typename: "ModelRatingConnection",
      items?:  Array< {
        __typename: "Rating",
        id: string,
        userID: string,
        adID: string,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    transmissionType: TransmissionType,
    description: string,
    fuelType: FuelType,
    phone: string,
    picture: string,
    condition: Condition,
    longitude: number,
    latitude: number,
    region: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAdMutationVariables = {
  input: DeleteAdInput,
  condition?: ModelAdConditionInput | null,
};

export type DeleteAdMutation = {
  deleteAd?:  {
    __typename: "Ad",
    id: string,
    brand: string,
    model: string,
    color: string,
    engine: number,
    price: number,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      favorites?:  {
        __typename: "ModelFavoriteConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      picture?: string | null,
      email: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    year: number,
    pictures?:  {
      __typename: "ModelPictureConnection",
      items?:  Array< {
        __typename: "Picture",
        id: string,
        adID: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ratings?:  {
      __typename: "ModelRatingConnection",
      items?:  Array< {
        __typename: "Rating",
        id: string,
        userID: string,
        adID: string,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    transmissionType: TransmissionType,
    description: string,
    fuelType: FuelType,
    phone: string,
    picture: string,
    condition: Condition,
    longitude: number,
    latitude: number,
    region: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePictureMutationVariables = {
  input: CreatePictureInput,
  condition?: ModelPictureConditionInput | null,
};

export type CreatePictureMutation = {
  createPicture?:  {
    __typename: "Picture",
    id: string,
    adID: string,
    ad?:  {
      __typename: "Ad",
      id: string,
      brand: string,
      model: string,
      color: string,
      engine: number,
      price: number,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        picture?: string | null,
        email: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      year: number,
      pictures?:  {
        __typename: "ModelPictureConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      transmissionType: TransmissionType,
      description: string,
      fuelType: FuelType,
      phone: string,
      picture: string,
      condition: Condition,
      longitude: number,
      latitude: number,
      region: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePictureMutationVariables = {
  input: UpdatePictureInput,
  condition?: ModelPictureConditionInput | null,
};

export type UpdatePictureMutation = {
  updatePicture?:  {
    __typename: "Picture",
    id: string,
    adID: string,
    ad?:  {
      __typename: "Ad",
      id: string,
      brand: string,
      model: string,
      color: string,
      engine: number,
      price: number,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        picture?: string | null,
        email: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      year: number,
      pictures?:  {
        __typename: "ModelPictureConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      transmissionType: TransmissionType,
      description: string,
      fuelType: FuelType,
      phone: string,
      picture: string,
      condition: Condition,
      longitude: number,
      latitude: number,
      region: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePictureMutationVariables = {
  input: DeletePictureInput,
  condition?: ModelPictureConditionInput | null,
};

export type DeletePictureMutation = {
  deletePicture?:  {
    __typename: "Picture",
    id: string,
    adID: string,
    ad?:  {
      __typename: "Ad",
      id: string,
      brand: string,
      model: string,
      color: string,
      engine: number,
      price: number,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        picture?: string | null,
        email: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      year: number,
      pictures?:  {
        __typename: "ModelPictureConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      transmissionType: TransmissionType,
      description: string,
      fuelType: FuelType,
      phone: string,
      picture: string,
      condition: Condition,
      longitude: number,
      latitude: number,
      region: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFavoriteMutationVariables = {
  input: CreateFavoriteInput,
  condition?: ModelFavoriteConditionInput | null,
};

export type CreateFavoriteMutation = {
  createFavorite?:  {
    __typename: "Favorite",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      favorites?:  {
        __typename: "ModelFavoriteConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      picture?: string | null,
      email: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    adID: string,
    ad?:  {
      __typename: "Ad",
      id: string,
      brand: string,
      model: string,
      color: string,
      engine: number,
      price: number,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        picture?: string | null,
        email: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      year: number,
      pictures?:  {
        __typename: "ModelPictureConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      transmissionType: TransmissionType,
      description: string,
      fuelType: FuelType,
      phone: string,
      picture: string,
      condition: Condition,
      longitude: number,
      latitude: number,
      region: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFavoriteMutationVariables = {
  input: UpdateFavoriteInput,
  condition?: ModelFavoriteConditionInput | null,
};

export type UpdateFavoriteMutation = {
  updateFavorite?:  {
    __typename: "Favorite",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      favorites?:  {
        __typename: "ModelFavoriteConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      picture?: string | null,
      email: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    adID: string,
    ad?:  {
      __typename: "Ad",
      id: string,
      brand: string,
      model: string,
      color: string,
      engine: number,
      price: number,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        picture?: string | null,
        email: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      year: number,
      pictures?:  {
        __typename: "ModelPictureConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      transmissionType: TransmissionType,
      description: string,
      fuelType: FuelType,
      phone: string,
      picture: string,
      condition: Condition,
      longitude: number,
      latitude: number,
      region: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFavoriteMutationVariables = {
  input: DeleteFavoriteInput,
  condition?: ModelFavoriteConditionInput | null,
};

export type DeleteFavoriteMutation = {
  deleteFavorite?:  {
    __typename: "Favorite",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      favorites?:  {
        __typename: "ModelFavoriteConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      picture?: string | null,
      email: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    adID: string,
    ad?:  {
      __typename: "Ad",
      id: string,
      brand: string,
      model: string,
      color: string,
      engine: number,
      price: number,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        picture?: string | null,
        email: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      year: number,
      pictures?:  {
        __typename: "ModelPictureConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      transmissionType: TransmissionType,
      description: string,
      fuelType: FuelType,
      phone: string,
      picture: string,
      condition: Condition,
      longitude: number,
      latitude: number,
      region: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRatingMutationVariables = {
  input: CreateRatingInput,
  condition?: ModelRatingConditionInput | null,
};

export type CreateRatingMutation = {
  createRating?:  {
    __typename: "Rating",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      favorites?:  {
        __typename: "ModelFavoriteConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      picture?: string | null,
      email: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    adID: string,
    ad?:  {
      __typename: "Ad",
      id: string,
      brand: string,
      model: string,
      color: string,
      engine: number,
      price: number,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        picture?: string | null,
        email: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      year: number,
      pictures?:  {
        __typename: "ModelPictureConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      transmissionType: TransmissionType,
      description: string,
      fuelType: FuelType,
      phone: string,
      picture: string,
      condition: Condition,
      longitude: number,
      latitude: number,
      region: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    rating: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRatingMutationVariables = {
  input: UpdateRatingInput,
  condition?: ModelRatingConditionInput | null,
};

export type UpdateRatingMutation = {
  updateRating?:  {
    __typename: "Rating",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      favorites?:  {
        __typename: "ModelFavoriteConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      picture?: string | null,
      email: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    adID: string,
    ad?:  {
      __typename: "Ad",
      id: string,
      brand: string,
      model: string,
      color: string,
      engine: number,
      price: number,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        picture?: string | null,
        email: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      year: number,
      pictures?:  {
        __typename: "ModelPictureConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      transmissionType: TransmissionType,
      description: string,
      fuelType: FuelType,
      phone: string,
      picture: string,
      condition: Condition,
      longitude: number,
      latitude: number,
      region: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    rating: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRatingMutationVariables = {
  input: DeleteRatingInput,
  condition?: ModelRatingConditionInput | null,
};

export type DeleteRatingMutation = {
  deleteRating?:  {
    __typename: "Rating",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      favorites?:  {
        __typename: "ModelFavoriteConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      picture?: string | null,
      email: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    adID: string,
    ad?:  {
      __typename: "Ad",
      id: string,
      brand: string,
      model: string,
      color: string,
      engine: number,
      price: number,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        picture?: string | null,
        email: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      year: number,
      pictures?:  {
        __typename: "ModelPictureConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      transmissionType: TransmissionType,
      description: string,
      fuelType: FuelType,
      phone: string,
      picture: string,
      condition: Condition,
      longitude: number,
      latitude: number,
      region: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    rating: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      items?:  Array< {
        __typename: "Favorite",
        id: string,
        userID: string,
        adID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ratings?:  {
      __typename: "ModelRatingConnection",
      items?:  Array< {
        __typename: "Rating",
        id: string,
        userID: string,
        adID: string,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ads?:  {
      __typename: "ModelAdConnection",
      items?:  Array< {
        __typename: "Ad",
        id: string,
        brand: string,
        model: string,
        color: string,
        engine: number,
        price: number,
        userID: string,
        year: number,
        transmissionType: TransmissionType,
        description: string,
        fuelType: FuelType,
        phone: string,
        picture: string,
        condition: Condition,
        longitude: number,
        latitude: number,
        region: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    picture?: string | null,
    email: string,
    cognitoID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      favorites?:  {
        __typename: "ModelFavoriteConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      picture?: string | null,
      email: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAdQueryVariables = {
  id: string,
};

export type GetAdQuery = {
  getAd?:  {
    __typename: "Ad",
    id: string,
    brand: string,
    model: string,
    color: string,
    engine: number,
    price: number,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      favorites?:  {
        __typename: "ModelFavoriteConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      picture?: string | null,
      email: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    year: number,
    pictures?:  {
      __typename: "ModelPictureConnection",
      items?:  Array< {
        __typename: "Picture",
        id: string,
        adID: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ratings?:  {
      __typename: "ModelRatingConnection",
      items?:  Array< {
        __typename: "Rating",
        id: string,
        userID: string,
        adID: string,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    transmissionType: TransmissionType,
    description: string,
    fuelType: FuelType,
    phone: string,
    picture: string,
    condition: Condition,
    longitude: number,
    latitude: number,
    region: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAdsQueryVariables = {
  filter?: ModelAdFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAdsQuery = {
  listAds?:  {
    __typename: "ModelAdConnection",
    items?:  Array< {
      __typename: "Ad",
      id: string,
      brand: string,
      model: string,
      color: string,
      engine: number,
      price: number,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        picture?: string | null,
        email: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      year: number,
      pictures?:  {
        __typename: "ModelPictureConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      transmissionType: TransmissionType,
      description: string,
      fuelType: FuelType,
      phone: string,
      picture: string,
      condition: Condition,
      longitude: number,
      latitude: number,
      region: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPictureQueryVariables = {
  id: string,
};

export type GetPictureQuery = {
  getPicture?:  {
    __typename: "Picture",
    id: string,
    adID: string,
    ad?:  {
      __typename: "Ad",
      id: string,
      brand: string,
      model: string,
      color: string,
      engine: number,
      price: number,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        picture?: string | null,
        email: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      year: number,
      pictures?:  {
        __typename: "ModelPictureConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      transmissionType: TransmissionType,
      description: string,
      fuelType: FuelType,
      phone: string,
      picture: string,
      condition: Condition,
      longitude: number,
      latitude: number,
      region: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPicturesQueryVariables = {
  filter?: ModelPictureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPicturesQuery = {
  listPictures?:  {
    __typename: "ModelPictureConnection",
    items?:  Array< {
      __typename: "Picture",
      id: string,
      adID: string,
      ad?:  {
        __typename: "Ad",
        id: string,
        brand: string,
        model: string,
        color: string,
        engine: number,
        price: number,
        userID: string,
        year: number,
        transmissionType: TransmissionType,
        description: string,
        fuelType: FuelType,
        phone: string,
        picture: string,
        condition: Condition,
        longitude: number,
        latitude: number,
        region: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      url: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetFavoriteQueryVariables = {
  id: string,
};

export type GetFavoriteQuery = {
  getFavorite?:  {
    __typename: "Favorite",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      favorites?:  {
        __typename: "ModelFavoriteConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      picture?: string | null,
      email: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    adID: string,
    ad?:  {
      __typename: "Ad",
      id: string,
      brand: string,
      model: string,
      color: string,
      engine: number,
      price: number,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        picture?: string | null,
        email: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      year: number,
      pictures?:  {
        __typename: "ModelPictureConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      transmissionType: TransmissionType,
      description: string,
      fuelType: FuelType,
      phone: string,
      picture: string,
      condition: Condition,
      longitude: number,
      latitude: number,
      region: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFavoritesQueryVariables = {
  filter?: ModelFavoriteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFavoritesQuery = {
  listFavorites?:  {
    __typename: "ModelFavoriteConnection",
    items?:  Array< {
      __typename: "Favorite",
      id: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        picture?: string | null,
        email: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      adID: string,
      ad?:  {
        __typename: "Ad",
        id: string,
        brand: string,
        model: string,
        color: string,
        engine: number,
        price: number,
        userID: string,
        year: number,
        transmissionType: TransmissionType,
        description: string,
        fuelType: FuelType,
        phone: string,
        picture: string,
        condition: Condition,
        longitude: number,
        latitude: number,
        region: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRatingQueryVariables = {
  id: string,
};

export type GetRatingQuery = {
  getRating?:  {
    __typename: "Rating",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      favorites?:  {
        __typename: "ModelFavoriteConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      picture?: string | null,
      email: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    adID: string,
    ad?:  {
      __typename: "Ad",
      id: string,
      brand: string,
      model: string,
      color: string,
      engine: number,
      price: number,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        picture?: string | null,
        email: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      year: number,
      pictures?:  {
        __typename: "ModelPictureConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      transmissionType: TransmissionType,
      description: string,
      fuelType: FuelType,
      phone: string,
      picture: string,
      condition: Condition,
      longitude: number,
      latitude: number,
      region: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    rating: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRatingsQueryVariables = {
  filter?: ModelRatingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRatingsQuery = {
  listRatings?:  {
    __typename: "ModelRatingConnection",
    items?:  Array< {
      __typename: "Rating",
      id: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        picture?: string | null,
        email: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      adID: string,
      ad?:  {
        __typename: "Ad",
        id: string,
        brand: string,
        model: string,
        color: string,
        engine: number,
        price: number,
        userID: string,
        year: number,
        transmissionType: TransmissionType,
        description: string,
        fuelType: FuelType,
        phone: string,
        picture: string,
        condition: Condition,
        longitude: number,
        latitude: number,
        region: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      rating: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      items?:  Array< {
        __typename: "Favorite",
        id: string,
        userID: string,
        adID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ratings?:  {
      __typename: "ModelRatingConnection",
      items?:  Array< {
        __typename: "Rating",
        id: string,
        userID: string,
        adID: string,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ads?:  {
      __typename: "ModelAdConnection",
      items?:  Array< {
        __typename: "Ad",
        id: string,
        brand: string,
        model: string,
        color: string,
        engine: number,
        price: number,
        userID: string,
        year: number,
        transmissionType: TransmissionType,
        description: string,
        fuelType: FuelType,
        phone: string,
        picture: string,
        condition: Condition,
        longitude: number,
        latitude: number,
        region: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    picture?: string | null,
    email: string,
    cognitoID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      items?:  Array< {
        __typename: "Favorite",
        id: string,
        userID: string,
        adID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ratings?:  {
      __typename: "ModelRatingConnection",
      items?:  Array< {
        __typename: "Rating",
        id: string,
        userID: string,
        adID: string,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ads?:  {
      __typename: "ModelAdConnection",
      items?:  Array< {
        __typename: "Ad",
        id: string,
        brand: string,
        model: string,
        color: string,
        engine: number,
        price: number,
        userID: string,
        year: number,
        transmissionType: TransmissionType,
        description: string,
        fuelType: FuelType,
        phone: string,
        picture: string,
        condition: Condition,
        longitude: number,
        latitude: number,
        region: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    picture?: string | null,
    email: string,
    cognitoID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    favorites?:  {
      __typename: "ModelFavoriteConnection",
      items?:  Array< {
        __typename: "Favorite",
        id: string,
        userID: string,
        adID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ratings?:  {
      __typename: "ModelRatingConnection",
      items?:  Array< {
        __typename: "Rating",
        id: string,
        userID: string,
        adID: string,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ads?:  {
      __typename: "ModelAdConnection",
      items?:  Array< {
        __typename: "Ad",
        id: string,
        brand: string,
        model: string,
        color: string,
        engine: number,
        price: number,
        userID: string,
        year: number,
        transmissionType: TransmissionType,
        description: string,
        fuelType: FuelType,
        phone: string,
        picture: string,
        condition: Condition,
        longitude: number,
        latitude: number,
        region: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    picture?: string | null,
    email: string,
    cognitoID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAdSubscription = {
  onCreateAd?:  {
    __typename: "Ad",
    id: string,
    brand: string,
    model: string,
    color: string,
    engine: number,
    price: number,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      favorites?:  {
        __typename: "ModelFavoriteConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      picture?: string | null,
      email: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    year: number,
    pictures?:  {
      __typename: "ModelPictureConnection",
      items?:  Array< {
        __typename: "Picture",
        id: string,
        adID: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ratings?:  {
      __typename: "ModelRatingConnection",
      items?:  Array< {
        __typename: "Rating",
        id: string,
        userID: string,
        adID: string,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    transmissionType: TransmissionType,
    description: string,
    fuelType: FuelType,
    phone: string,
    picture: string,
    condition: Condition,
    longitude: number,
    latitude: number,
    region: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAdSubscription = {
  onUpdateAd?:  {
    __typename: "Ad",
    id: string,
    brand: string,
    model: string,
    color: string,
    engine: number,
    price: number,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      favorites?:  {
        __typename: "ModelFavoriteConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      picture?: string | null,
      email: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    year: number,
    pictures?:  {
      __typename: "ModelPictureConnection",
      items?:  Array< {
        __typename: "Picture",
        id: string,
        adID: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ratings?:  {
      __typename: "ModelRatingConnection",
      items?:  Array< {
        __typename: "Rating",
        id: string,
        userID: string,
        adID: string,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    transmissionType: TransmissionType,
    description: string,
    fuelType: FuelType,
    phone: string,
    picture: string,
    condition: Condition,
    longitude: number,
    latitude: number,
    region: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAdSubscription = {
  onDeleteAd?:  {
    __typename: "Ad",
    id: string,
    brand: string,
    model: string,
    color: string,
    engine: number,
    price: number,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      favorites?:  {
        __typename: "ModelFavoriteConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      picture?: string | null,
      email: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    year: number,
    pictures?:  {
      __typename: "ModelPictureConnection",
      items?:  Array< {
        __typename: "Picture",
        id: string,
        adID: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ratings?:  {
      __typename: "ModelRatingConnection",
      items?:  Array< {
        __typename: "Rating",
        id: string,
        userID: string,
        adID: string,
        rating: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    transmissionType: TransmissionType,
    description: string,
    fuelType: FuelType,
    phone: string,
    picture: string,
    condition: Condition,
    longitude: number,
    latitude: number,
    region: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePictureSubscription = {
  onCreatePicture?:  {
    __typename: "Picture",
    id: string,
    adID: string,
    ad?:  {
      __typename: "Ad",
      id: string,
      brand: string,
      model: string,
      color: string,
      engine: number,
      price: number,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        picture?: string | null,
        email: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      year: number,
      pictures?:  {
        __typename: "ModelPictureConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      transmissionType: TransmissionType,
      description: string,
      fuelType: FuelType,
      phone: string,
      picture: string,
      condition: Condition,
      longitude: number,
      latitude: number,
      region: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePictureSubscription = {
  onUpdatePicture?:  {
    __typename: "Picture",
    id: string,
    adID: string,
    ad?:  {
      __typename: "Ad",
      id: string,
      brand: string,
      model: string,
      color: string,
      engine: number,
      price: number,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        picture?: string | null,
        email: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      year: number,
      pictures?:  {
        __typename: "ModelPictureConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      transmissionType: TransmissionType,
      description: string,
      fuelType: FuelType,
      phone: string,
      picture: string,
      condition: Condition,
      longitude: number,
      latitude: number,
      region: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePictureSubscription = {
  onDeletePicture?:  {
    __typename: "Picture",
    id: string,
    adID: string,
    ad?:  {
      __typename: "Ad",
      id: string,
      brand: string,
      model: string,
      color: string,
      engine: number,
      price: number,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        picture?: string | null,
        email: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      year: number,
      pictures?:  {
        __typename: "ModelPictureConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      transmissionType: TransmissionType,
      description: string,
      fuelType: FuelType,
      phone: string,
      picture: string,
      condition: Condition,
      longitude: number,
      latitude: number,
      region: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFavoriteSubscription = {
  onCreateFavorite?:  {
    __typename: "Favorite",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      favorites?:  {
        __typename: "ModelFavoriteConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      picture?: string | null,
      email: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    adID: string,
    ad?:  {
      __typename: "Ad",
      id: string,
      brand: string,
      model: string,
      color: string,
      engine: number,
      price: number,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        picture?: string | null,
        email: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      year: number,
      pictures?:  {
        __typename: "ModelPictureConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      transmissionType: TransmissionType,
      description: string,
      fuelType: FuelType,
      phone: string,
      picture: string,
      condition: Condition,
      longitude: number,
      latitude: number,
      region: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFavoriteSubscription = {
  onUpdateFavorite?:  {
    __typename: "Favorite",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      favorites?:  {
        __typename: "ModelFavoriteConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      picture?: string | null,
      email: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    adID: string,
    ad?:  {
      __typename: "Ad",
      id: string,
      brand: string,
      model: string,
      color: string,
      engine: number,
      price: number,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        picture?: string | null,
        email: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      year: number,
      pictures?:  {
        __typename: "ModelPictureConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      transmissionType: TransmissionType,
      description: string,
      fuelType: FuelType,
      phone: string,
      picture: string,
      condition: Condition,
      longitude: number,
      latitude: number,
      region: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFavoriteSubscription = {
  onDeleteFavorite?:  {
    __typename: "Favorite",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      favorites?:  {
        __typename: "ModelFavoriteConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      picture?: string | null,
      email: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    adID: string,
    ad?:  {
      __typename: "Ad",
      id: string,
      brand: string,
      model: string,
      color: string,
      engine: number,
      price: number,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        picture?: string | null,
        email: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      year: number,
      pictures?:  {
        __typename: "ModelPictureConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      transmissionType: TransmissionType,
      description: string,
      fuelType: FuelType,
      phone: string,
      picture: string,
      condition: Condition,
      longitude: number,
      latitude: number,
      region: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRatingSubscription = {
  onCreateRating?:  {
    __typename: "Rating",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      favorites?:  {
        __typename: "ModelFavoriteConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      picture?: string | null,
      email: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    adID: string,
    ad?:  {
      __typename: "Ad",
      id: string,
      brand: string,
      model: string,
      color: string,
      engine: number,
      price: number,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        picture?: string | null,
        email: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      year: number,
      pictures?:  {
        __typename: "ModelPictureConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      transmissionType: TransmissionType,
      description: string,
      fuelType: FuelType,
      phone: string,
      picture: string,
      condition: Condition,
      longitude: number,
      latitude: number,
      region: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    rating: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRatingSubscription = {
  onUpdateRating?:  {
    __typename: "Rating",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      favorites?:  {
        __typename: "ModelFavoriteConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      picture?: string | null,
      email: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    adID: string,
    ad?:  {
      __typename: "Ad",
      id: string,
      brand: string,
      model: string,
      color: string,
      engine: number,
      price: number,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        picture?: string | null,
        email: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      year: number,
      pictures?:  {
        __typename: "ModelPictureConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      transmissionType: TransmissionType,
      description: string,
      fuelType: FuelType,
      phone: string,
      picture: string,
      condition: Condition,
      longitude: number,
      latitude: number,
      region: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    rating: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRatingSubscription = {
  onDeleteRating?:  {
    __typename: "Rating",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      favorites?:  {
        __typename: "ModelFavoriteConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      picture?: string | null,
      email: string,
      cognitoID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    adID: string,
    ad?:  {
      __typename: "Ad",
      id: string,
      brand: string,
      model: string,
      color: string,
      engine: number,
      price: number,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        picture?: string | null,
        email: string,
        cognitoID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      year: number,
      pictures?:  {
        __typename: "ModelPictureConnection",
        nextToken?: string | null,
      } | null,
      ratings?:  {
        __typename: "ModelRatingConnection",
        nextToken?: string | null,
      } | null,
      transmissionType: TransmissionType,
      description: string,
      fuelType: FuelType,
      phone: string,
      picture: string,
      condition: Condition,
      longitude: number,
      latitude: number,
      region: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    rating: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
