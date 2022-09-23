# playlists-galore

⚠️ Since October 2022 and heroku's billing policy change (no more free account), this app is now deployed as a static front-end on Firebase ⚠️

The app is accessible at https://playlists-galore.web.app

~~The app is accessible on [heroku](https://playlists-galore.herokuapp.com).~~

~~Built in Typescript with React and Tinyhttp, bundled with Vite, deployed on heroku.~~

## Development

⚠️ Only the front-end is maintaine for the moment

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

## Deployment (Heroku)

⚠️ Deprecated, see Firebase deployment in front-end package

~~Test deployment locally: `heroku local`~~

```sh
# login to heroku
heroku login

# This will trigger "build" and "start" scripts
git push heroku master
```

~~Check deployment logs: `heroku logs--tail`~~
