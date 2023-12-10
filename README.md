# Photo album assignment
In this assignment I was asked to create a SPA displaying a data set provided by an API. If the API returns an error it should display the last valid response.

The main requirements are:
- Responsive single page application
- Using a javascript framework (React)
- Typescript
- Using a state machine (Redux)
- Routing (React Router)
- Implementing tests (Jest, React Testing Library)
- Docker

## Pages

### Main page

![MainPage](https://github.com/ndrlpzm/assignment-frontend-dec/assets/46680834/9f41d02e-b274-4f04-b826-a6947f7af5a6)

In this page we will be showing a preview of the item containing a cropped image (using the item description as the image alt) and the title on top. When an image can't be loaded, a placeholder is rendered instead.

When the user clicks an item, this item is set as active (shown as a reddish border) and it redirects to the /:id/:item page.

**Note:** Image caching should be done automatically by the browser but it will still try to reload missing pictures. Since this is desirable behaviour no other caching techniques were considered.

### Item page
![ItemPage](https://github.com/ndrlpzm/assignment-frontend-dec/assets/46680834/6462918f-07ba-4a83-b331-14273c06e50b)

This page displays the uncropped image together with its title and description.

The Go Home button refetches data and navigates to the main page.

**Note:** The assignment isn´t clear about what to do when navigating home, but since it instructs you to use fetch all and set active I assumed there was a typo and decided to only do the fetching. The active item is already being updated on click on the main page.

## Data

### Api data

The api provided returns a json object similar to this:

```
{
  mock_1: {
    title: "Mock 1",
    description: "Description 1",
    image: "https://images.mocks/id/00",
    index: 1,
  },
  mock_2: {
    title: "Mock 2",
    description: "Description 2",
    image: "http://www.mock.com/images/stocks/stock1502.jpg",
    index: 2,
  },
}
```

Since the assignment doesn´t specify how data should be stored in the application a decision was made to store the data in an array consisting of Item elements.

### Auxiliary data

#### Toast

Errors are shown in a toast component. To do this, Toast objects are stored in state and deleted automatically using the useCreateToast custom hook. Toasts contain the following properties:

- title: string
- content:string
- type: warning | error | information | success

Most of these types won't be used in this application but css is provided to match the toast types.

## State

### Item List

The item list state contains the following properties as instructed by the assignment:
| Property | Type | Default
|----------|------|--------|
|data | Item array or null| null|
|loading | boolean | true |
| error | string or undefined | undefined|

The item list is populated through a thunk (fetchAll) where the fetch auxiliary function is called and performs the following actions according to the result:

- Pending: resets the error but keeps the previous data. This is done so the last fetch can be displayed in case of an api error.
- Rejected: updates the error and loading properties but still keeps the same data.
- Fulfilled: maps the payload to fit an Item array, sorts the array by index and updates the loading property

**Note:** the api doesn't provide ordering or pagination options or at least they weren't specified.

### Active Item

The assignment mentions the active ID, but since the api doesn't provide an endpoint to retrieve the item I made the decision to store the entire Item as active instead of the index.

While this wouldn't be ideal in a production environment it is a good workaround to display the details in the /:id/:item page.

## Tests
 ```
 npm test
```

### "Home page has items when it's done loading"

This test checks that at least one photo preview is rendered after the "loading" placeholder text disappears.

### "Home page items stay selected after click"

In this test we wait for the photo previews to load, click the first one, wait for the item page to load and click the "Go Home" button again.

The test should pass if the item we clicked contains the selected-item css class.

## Docker

```sh
# Docker build
docker build -t demo .
# Run container
docker run --name demo -p 8080:80 -d demo
```
