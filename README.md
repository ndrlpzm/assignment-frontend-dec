# Photo album assignment

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

Since the assignment doesn´t specify how data should be stored in the application a decision was made to store the data in an array consisting of Item elements. The item class contains the following properties:

- key: string
- index: number
- image: string
- title: string
- description: string or undefined

While the structure isn't the same as the one of the json objects it was done this way to make it easier to use in the application. To do this I'm mapping the payload right after the fetch.

### Auxiliary data

#### Toast

Errors are shown in a toast component. To do this, Toast objects are stored in state and deleted automatically using the useCreateToast custom hook. Toasts contain the following properties:

- title: string
- content:string
- type: warning | error | information | success

Most of these types won't be used in this application but css is provided to match the toast types.

## State

The application uses Redux for state management. The state store consists of three slices: item List, active Item and toast.

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

The active item is stored as Item or undefined through the setActive reducer and it defaults to undefined.

The api doesn't provide an endpoint to retrieve the item so I decided to store the entire Item as active instead of the index. This is also used to display the details in the /:id/:item page

### Toast

The toast slice stores a Toast array and provides two self explanatory reducers to update it: add and deleteFirst.

## Pages

### Main page

In this page we will be showing a preview of the item containing a cropped image using the item description as the image alt and the title property. When an image can't be loaded, a placeholder is rendered instead.

When the user clicks an item, this item is set as active (shown as a reddish border) and it redirects to the /:id/:item page.

When the loading state is true a placeholder label is shown.

**Note:** Image caching should be done automatically by the browser but it will still try to reload missing pictures. Since this is desirable behaviour no other caching techniques were considered.

### Item page

This page displays the image data.

## Tests

Using jest.spyOn the fetch is intercepted and a Response is returned using mock data to be used during tests.

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
