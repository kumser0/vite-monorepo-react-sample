# Sample Vite & React monorepo

A sample monorepo with Vite, React, Typescript.

## Local start

- `yarn install`
- run libs in watch mode `yarn build:watch:libs`
- run the app in dev mode `yarn start`

## Setup explained

For our "libs" packages we use ["Library Mode"](https://vitejs.dev/guide/build.html#library-mode) build in Vite. They are not supposed to be started in dev server. When changing libs when developing, they could be started in watch mode.

## Initial setup

Below are rough high-level steps explaining how this repo was initialized.

- Init Lerna with `npx lerna init`. Set up packages to `libs/*` and `apps/*` and to use Yarn as a client.
- Add Prettier with default settings (`yarn add prettier -D -W`).
- Add Typescript with `tsc --init`. Adjust couple of settings (e.g. module to "esnext"). `tsconfig-common.json` provides shares TS settings, each package will have its own `tsconfig.json`.
- Add vite `yarn add vite -W` and vite config files. In both libs packages we use ["Library Mode"](https://vitejs.dev/guide/build.html#library-mode).
- Create packages `libs/components`, `libs/utils`, `apps/app` (e.g. `npx lerna create components`). Especially for the `app`, it is easier to use parts of Vite `react-ts` template (`yarn create vite`).
- Add some sample code to the packages. The goal it to start `apps/app` which should import both lib packages.
