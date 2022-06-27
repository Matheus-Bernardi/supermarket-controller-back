<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Database

```bash
# run migrations
$ npm run knex:migrate

# undo migrations
$ npm run knex:migrate:undo

# run seeds
$ npm run knex:seed
```

## Docker Compose

### Run with docker

```bash
# Create network
docker network create services
```
```bash
# Install dependencies
docker-compose run --rm node npm i
```
```bash
# Run migrations
docker-compose run --rm node npm run knex:migrate
```
```bash
# Run seeds
docker-compose run --rm node npm run knex:seed
```
```bash
# Run tests
docker-compose run --rm node npm run test
```
```bash
# Run tests coverage
docker-compose run --rm node npm run test:cov
```
```bash
# Run Project
docker-compose up
```



## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
