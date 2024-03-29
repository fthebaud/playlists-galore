# Front end

Playlist's galore front-end, implemented in React.

## Commands

```sh
# Lint check
yarn lint

# Lint fix
yarn lint:fix

# Start dev server
yarn dev

# Build for production
yarn build

# locally preview production build
yarn serve
```

## Deployment

Firebase is an app development platform by Google.

Deployment is done using [Firebase's hosting tool](https://firebase.google.com/docs/hosting).

_Note:_ Hosting tool can be combined with [cloud function or cloud run](https://firebase.google.com/docs/hosting/serverless-overview) for dyncamic web apps.

### Setup

- Create project in [firebase console](https://console.firebase.google.com/)
- Install firebase CLI: `npm install -g firebase-tools`
- Initialise firebase configuration in local project: `firebase init`
  - no URL rewrites
  - "public" should be set to the build folder (`/dist`)
  - More information on hosting configuration [here](https://firebase.google.com/docs/hosting/full-config)

### Deployment

```sh
# build new version
yarn build

# deploy new version
firebase deploy
```
