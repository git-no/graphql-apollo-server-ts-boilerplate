# Apollo 2 GraphQL Server Typescript Boilerplate

This is a boilerplate for API server projects, a repository based on:

- Apollo Server
- GraphQL
- TypeORM
- Typescript
- NodeJS
- Yarn and (yarn workspace structure)

It includes main node packages:

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

1. Upgrade or install Yarn package manager

   ```
   brew install yarn --without-node
   ```

   Install or update node dependencies (within the root directory)

   ```
   yarn install
   ```

   or upgrade dependencies to their latest version based on the specific range

   ```
   yarn upgrade-interactive --latest
   ```

### Usage

Building all packages

```
yarn build
```

---

## todo:

- Test integration like from [benawad](https://github.com/benawad/graphql-ts-server-boilerplate)
- Check if hoster are able to run typescript or does it need to transfer to javascript
