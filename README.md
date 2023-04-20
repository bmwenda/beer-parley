# 🍻Beer Recommender

## Introduction
Beer recommender shows you beers from a catalog and lets you add a rating after you've tried one. A catalog of your beers is created and more beers are suggested based on your preferences from your past reviews.

The application is built with a rails backend and a react frontend.

## Table of contents
- [Dependencies](#dependencies)
- [Setup](#setup)
- [Development](#development)
- [Testing](#testing)
- [Linting](#linting)
- [Improvements](#improvements)

## Dependencies
To run locally, install the following dependencies:

1. [Docker](https://docs.docker.com/desktop/install/mac-install/)
2. [Docker compose](https://docs.docker.com/compose/install/#scenario-two-install-the-compose-plugin)


## Setup
Clone the repo and `cd` into the folder `beer-parley` and build the app with docker-compose:

```
    docker-compose build
```

### Database setup
Create the development database, run migrations and add seed data with the following commands.

```
    docker-compose run --rm web rails db:create
    docker-compose run --rm web rails rails db:migrate
    docker-compose run --rm web rails rails db:seed
```

### Start server
Start docker services with `docker-compose up`. Check the logs as the services boot up to confirm that there are no errors. To view logs for a particular service, run `docker-compose logs -f <service>`. For example to see rails server logs, run `docker-compose logs -f web`

## Development
When services have built and started successfully, the application should be accessible on `http://localhost:3000`. You may need to be patient with the webpack service as it could take a while to install and build all front end dependencies.

Hot module reloading is enabled via webpack dev server, so any changes you make in the javascript assets should be reflected immediately without the need to refresh the page.

### Testing
Run these commands to run tests:

Backend tests: `docker-compose run --rm web rspec spec`

Frontend tests: `docker-compose run --rm webpack yarn test`

### Linting
Inspect any linting errors or warnings by running the following commands.

Backend:`docker-compose run --rm web rubocop`

Frontend:`docker-compose run --rm webpack yarn lint`

## Improvements
1. Update user profile when they review a new beer to. This should keep the recommendations relevant and as accurate as possible.
2. Use more attributes of a beer (features) to determine similarity score of a beer and the user's profile.
