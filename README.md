# playlists-galore

The app is visible [here](https://playlists-galore.herokuapp.com).

Built in Typescript with React and Tinyhttp, bundled with Vite, deployed on heroku.

## Development

```sh
# Install dependencies
cd playlists-galore
yarn install

# Build tool-box
cd playlists-galore/packages/playlists-galore-toolbox
yarn build

# Start back-end
cd playlists-galore/packages/playlists-galore-back
yarn dev

# Start front-end
cd playlists-galore/packagesplaylists-galore-front
yarn dev
```

Test deployment locally: `heroku local`

## Deployment (Heroku)

```sh
# login to heroku
heroku login

# This will trigger "build" and "start" scripts
git push heroku master
```

Check deployment logs: `heroku logs--tail`
