# Front-end Challenge: Charity Search

## Intro

The most common UI elements in Front-end development are lists, forms, and detail pages.

You'll be building a simple UI list and search charities and a details page for each charity.

## Challenge

There's an `api.server.ts` SDK-like file with all the methods you will need to interact with the "API" note that the API is just an array in the file system.

All API methods have a 5% of possibility of throwing an error, so you should handle the error and show a friendly message to the user.

Using that SDK, you should be three routes:

1. `/charities`
2. `/charities/:id`
3. `/charities/new`

The first should be the list of charities with pagination and a search form to filter them. The list of results with the filter should also support pagination. Each charity on the list should show a link to their detail page.

The UI of each item should look something like the image below:

![](/docs/charity-item.png)

> The image is illustrative. It doesn't have to look exactly like that. Use any spacing, size, and color you think may look good.

The second one should use the ID from the URL to get the charity detail and show it somehow. The data is the same as in the list, plus the charity's mission.

The third one should show a form to ask for a charity name, mission, city, and state and let you create a new charity to include it in the "DB". After submitting the form, the user should be redirected to the newly created charity.

> There's no need to deploy the app.

## Optional

All of these things are **not required** but are some ideas of extra things you can add if you have time after you finish the rest.

1. Setup and use Tailwind to style the UI.
2. Reduce the amount of data sent from the loader to only what you need.
3. Prefetch data before navigation.
4. Add a global loading indicator.
5. Make the list be a layout route with `/new` and `/:id` as nested routes.
6. Document your code.
7. Add E2E tests with Cypress.

Note that they are not in any way, and all of them are equally valid

## Run the project

Install the dependencies:

```sh
npm install
```

Run the seed script to generate fake data to be used in the app:

```bash
npm run seed
```

And run in development, rebuilding the assets on file changes:

```sh
npm run dev
```

To run in production:

```sh
npm run build && npm start
```
