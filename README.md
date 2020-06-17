# Node.js and Express Concepts

A simple CRUD project to play with Node and Express concepts (no database connection).

### Prerequisites

Node.js and a package manager like npm or yarn.

### Installing

Run `npm install` or `yarn` to install all the dependencies.
Run `npm run dev` or `yarn dev` to run the server.

## Getting Started

The following endpoints can be tested with this server:

To list github repositories:
    GET http://localhost:3333/repositories

To create a repository (the body receives title (string), url (string) and techs (array of strings)):
    POST http://localhost:3333/repositories

To update a repository:
    PUT http://localhost:3333/repositories/:id

To delete a repository:
    DELETE http://localhost:3333/repositories/:id

To like a repository:
    POST http://localhost:3333/repositories/:id/like

## Running the tests

Run `npm test` or `yarn test` to run all the automated tests.