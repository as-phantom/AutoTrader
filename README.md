# Auto Trader
### System for creating and managing vehicle sale ads with free access.

This project was done with Angular version 12.1.4.

# WARNING 
This app might not run because free limits of AWS has been exceeded, if so please submit a issue! <br>
This is just an school project and it doesn't have the feature of deleting your account, use sample email when registering!

## Note: Currently all ads are from Plovdiv city in case you're wondering why there no ads when city filters are applied.

## Functionality

-   User registration with email, facebook or google
-   Ability to view ads
-   Ability to rate ads
-   Ability to add ads to favorite
-   Ability to browse most recent ads
-   Ability to edit and delete ads (if owner)
-   Ability to filter and search by various criteria
-   Ability to look up a vehicle's location and owner's contact details
-   Ability to edit profile page
-   Email verification and password reset functionality via email
-   Error handling, data validation and notifications
-   Decent UX and UI

## Technologies

-   HTML, SASS, Typescript, Angular, NgRx Store for state managment, RxJS for Reactive programming
-   GraphQL API (AWS), DinamoDB (AWS), Cognito Authentication Service (AWS), S3 Bucket (AWS), Identity and Access Management/IAM (AWS), Amplify 
-   Google and Facebook APIs for geolocation and authentication
-   GitHub Pages

## Views (Pages)

-   **Landing Page**
-   **Login/Register** - registration with username and email or password.
-   **Ads Browser/Search** - list of ads and option to search by various criteria.
-   **Ad Details** - additional description, location, contacts, etc.
-   **Create ad** - create new ad.
-   **Edit ad** - edit existing ad.
-   **Recent uploads** - latest ads created.
-   **Profile Page** - information and options for updating details.

## Implementation

### Data structure

#### Collections:

-   User

```javascript
{
      id: ID,
      favorites: [Favorite] @connection(keyName: "byUser", fields: ["id"]),
      ratings: [Rating] @connection(keyName: "byUser", fields: ["id"]),
      ads: [Ad] @connection(keyName: "byUser", fields: ["id"]),
      firstName: String,
      lastName: String,
      picture: String,
      email: String,
      cognitoID: ID
    
}
```

-   Picture

```javascript
{
       id: ID,
       adID: ID,
       ad: Ad @connection(fields: ["adID"]),
       url: String
}
```

-   Favorite

```javascript
{
       id: ID,
       userID: ID,
       user: User @connection(fields: ["userID"]),
       adID: ID,
       ad: Ad @connection(fields: ["adID"])
}
```

-   Region

```javascript
{
        id: ID,
        name: String,
        ads: [Ad] @connection(keyName: "byRegion", fields: ["id"])
}
```

-   Rating

```javascript
{
        id: ID,
        userID: ID,
        user: User @connection(fields: ["userID"]),
        adID: ID,
        ad: Ad @connection(fields: ["adID"]),
        rating: Int
}
```

-   Ad

```javascript
{
        id: ID,
        make: String,
        model: String,
        color: String,
        engine: Float,
        price: Float,
        year: Int,
        mileage: Int,
        userID: ID,
        user: User @connection(fields: ["userID"]),
        regionID: ID,
        region: Region! @connection(fields: ["regionID"]),
        favorites: [Favorite] @connection(keyName: "byAd", fields: ["id"]),
        pictures: [Picture] @connection(keyName: "byAd", fields: ["id"]),
        ratings: [Rating] @connection(keyName: "byAd", fields: ["id"]),
        transmission: Transmission,
        currency: Currency,
        description: String,
        fuel: Fuel,
        phone: String,
        picture: String,
        condition: Condition,
        longitude: Float,
        latitude: Float
}
```

#### Access control

-   Guests can register, view the recent ads, ad's details, search for ads.
-   Registered users can create ads, add ads to favorite, rate ads, update profile.
-   Only the creator of a ad can edit and delete it.

