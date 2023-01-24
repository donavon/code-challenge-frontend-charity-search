# Web Challenge: Charity Search

## Intro

The most common UI elements in web development are lists, forms, and detail pages.

That's what you will be building in this challenge.

## Challenge

There's an `api.server.ts` SDK-like file with all the methods you will need to interact with the "API" note that the API is just an array in the file system.

To simulate a network, the API delays between 50ms and 200ms.

All API methods have a 5% possibility of throwing an error, so you should handle the error and show a friendly message to the user.

Using that SDK, you should create three routes:

1. `/charities`
2. `/charities/:id`
3. `/charities/new`

The first should be the list of charities with pagination and a search form to filter them. The list of results with the filter should also support pagination. Each charity on the list should link to its detail page.

The UI of each item should look something like the image below:

![](/docs/charity-item.png)

> **Note**: The image is illustrative. It doesn't have to look exactly like that. Use any spacing, size, and color you think may look good. We don't judge the design.

The second one should use the ID from the URL to get the charity detail and show it somehow. Here show all the data from each charity.

The third one should show a form asking for the charity data (except the ID) and let you create a new charity to include in the "DB". After submitting the form, redirect the user to the newly created charity.

> **Note**: There's no need to deploy the app. We will run it locally.

## Evaluation

The evaluation criteria will be:

- Does it work?
- Does it do what it's supposed to do?

That's it. We don't care about the design, the code style, or anything else.

We want to have some code you wrote to talk about it.

## Optional

All of these things are **not required** but are some ideas of extra things you can add if you have time after you finish the rest.

- Set up and use Tailwind to style the UI.
- Reduce the amount of data sent from the loader to only what you need.
- Prefetch data before navigation, or search.
- Add a global loading indicator.
- Make the list a layout route with `/new` and `/:id` as nested routes, add a nested index route, and show something there.
- Add E2E tests with Cypress or Playwright.

They are not in any order and are equally valid extra points.

Feel free to add any extra (e.g., i18n, perf improvements, etc.), but remember it's not required. We'll use it to discuss this rather than evaluate the challenge.

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
