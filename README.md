# ReportingSystem

This project was initialized with Nx as the monorepo build system.
For the backend I have chosen the following main technologies:

- UI: [Angular](https://angular.io/), [NGRX](https://ngrx.io/) and [tailwindcss](https://tailwindcss.com/).
- API: [NestJs](https://nestjs.com/)
- Due to time limitations I decided to not use a database but instead load the testdata in memory. This means that the changes get not persisted after shutting down the api server.

## Run the Application

1. Run `npm install`
2. Run `npm run start:api` Server runs on http://localhost:3333/api.
3. Run `npm run start:ui`. Navigate to http://localhost:4200/.

## Running unit tests

- Run `npm run test:ui` to execute the frontend unit tests via [Jest](https://jestjs.io).
- Run `npm run test:api` to execute the backend unit tests via [Jest](https://jestjs.io).

## Running end-to-end tests

Run `npm run test:e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io).
