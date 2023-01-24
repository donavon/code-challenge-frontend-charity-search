# Web Challenge: Charity Search

## Intro

The most common UI elements in web development are lists, forms, and detail pages.

That's what you will be building in this challenge.

## Challenge

There's an `api.server.ts` SDK-like file with all the methods you will need to interact with the "API", note that the API is just an array in the file system.

All API methods have a delay between 50ms and 200ms to simulate a network.

All API methods have a 5% of possibility of throwing an error, so you should handle the error and show a friendly message to the user.

Using that SDK, you should create three routes:

1. `/charities`
2. `/charities/:id`
3. `/charities/new`

The first should be the list of charities with pagination and a search form to filter them. The list of results with the filter should also support pagination. Each charity on the list should link to their detail page.

The UI of each item should look something like the image below:

![](/docs/charity-item.png)

> **Note**: The image is illustrative. It doesn't have to look exactly like that. Use any spacing, size, and color you think may look good, we don't judge the design.

The second one should use the ID from the URL to get the charity detail and show it somehow. Here show all the data from each charity.

The third one should show a form to ask for the charity data (except the ID) and let you create a new charity to include it in the "DB". After submitting the form, the user should be redirected to the newly created charity.

> **Note**: There's no need to deploy the app, we will run it locally.

## Evaluation

The evaluation will be based on the following criteria:

- Does it work?
- Does it do what's supposed to do?

That's it, we don't care about the design, the code style, or anything else.

We just want to have some code you wrote to talk about it.

## Optional

All of these things are **not required** but are some ideas of extra things you can add if you have time after you finish the rest.

- Setup and use Tailwind to style the UI.
- Reduce the amount of data sent from the loader to only what you need.
- Prefetch data before navigation, or search.
- Add a global loading indicator.
- Make the list be a layout route with `/new` and `/:id` as nested routes, add an nested index route and show something there.
- Add E2E tests with Cypress or Playwright.

Note that they are not in any order, and all of them are equally valid extra points.

Feel free to add any extra you want (e.g. i18n, perf improvements, etc.), but remember it's not required, it'll be used to talk about this but not to evaluate the challenge.

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
