# Sample Vite & React monorepo

A sample monorepo with Vite, React, Typescript, Lerna and Yarn Workspaces.

The goal of this project:

- research and finalize the setup of such a monorepo, to be used in more complex projects later
- use it as a sandbox to try out new ideas on a simpler code base

It is not important what this project does functionally. I use it to try out the technology, not as a ready-to-use app or module.

## Local start & test

- `yarn install`
- run libs in watch mode `yarn build:watch:libs`
- run the app in dev mode `yarn start` & open in a browser

## Setup explained

### Interplay between libs and app & page updates

For our "libs" packages I use ["Library Mode"](https://vitejs.dev/guide/build.html#library-mode) build in Vite. They are not supposed to be started in dev server. When changing libs while developing, they could be started in watch mode.

The `app` can be started as a dev server.

If you change a file in "libs" and running a build in watch mode, it will rebuild, and also reload the `App.tsx` of the `app` with [HMR](https://vitejs.dev/guide/features.html#hot-module-replacement). In a browser, you would see the change without any refresh.

If you change a file in `app`, that reloads with [HMR](https://vitejs.dev/guide/features.html#hot-module-replacement) and you again see the change in browser without refresh.

### Type generation for libs

Vite library mode build does not generate type definitions (`d.ts` files) out of the box. I use [`vite-plugin-dts`](https://github.com/qmhc/vite-plugin-dts) for that.

## Initial setup

Below are rough high-level steps explaining how this repo was initialized.

- Init Lerna with `npx lerna init`. Set up packages to `libs/*` and `apps/*` and to use Yarn as a client.
- Add Prettier with default settings (`yarn add prettier -D -W`).
- Add Typescript with `tsc --init`. Adjust couple of settings (e.g. module to "esnext"). `tsconfig-common.json` provides shared TS settings, each package will have its own `tsconfig.json`.
- Add vite `yarn add vite -W` and vite config files. Also add Vite plugins which are needed. In both libs packages use ["Library Mode"](https://vitejs.dev/guide/build.html#library-mode).
- Create packages `libs/components`, `libs/utils`, `apps/app` (e.g. `npx lerna create components`). Especially for the `app`, it is easier to use parts of Vite `react-ts` template (`yarn create vite`).
- Add some sample code to the packages. The goal it to start `apps/app` which should import both lib packages.
