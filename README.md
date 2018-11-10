# Apollo 2 GraphQL Server Typescript Boilerplate

This is a boilerplate for API server projects, a repository based on:

- Apollo Server
- GraphQL
- TypeORM
- Typescript
- NodeJS

It includes main node packages:

- yarn: better Node package manager
- nodemon: automatically reload webpage after code changes
- ts-lint: typescript spell and syntax checker
- ts-lint-prettier: beautify codes automatically at save
- graphql
- apollo-server
- typeorm

Recommendation

- visual studio code: as editor application

## Installation

1. Clone repository

```
git clone https://github.com/git-no/graphql-apollo-server-ts-boilerplate.git
cd graphql-apollo-server-ts-boilerplate
```

2. Upgrade or install Yarn package manager

```
brew install yarn --without-node
```

2.1. Install or update node dependencies

```
yarn install
```

2.2. or upgrade dependencies to their latest version based on the specific range

```
yarn upgrade-interactive --latest
```

### Usage

You can start the server with `yarn start` then navigate to `http://localhost:4000` to use GraphQL Playground.

---

## todo:

- Mono blocl with packages
- Test integration like from [benawad](https://github.com/benawad/graphql-ts-server-boilerplate)
- Check if hoster are able to run typescript or does it need to transfer to javascript
