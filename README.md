# playlists-galore

Built in Typescript using React and Tinyhttp.
Bundled with Vite.
Deployed on heroku.

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
