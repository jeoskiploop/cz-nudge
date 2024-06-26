# cz-view

A plugin for React Native.

## Installation

```
npm i cz-view
```

## Usage

```jsx
import React from 'react'
import { Text } from 'react-native'
import { CzView } from 'cz-view'

export () =>
    <CzView>
        <Text>Hello Plugin</Text>
    </CzView>
```

## Development

### Build

Run a single build with `npm run build` and find the output in `/dist`.

### Tests

Tests configured for React Native can be run with `npm test` or `npm run test:watch` in watch mode.

### Preview App

To test your plugin on a device run the following to create a React Native app using it.

```
npm run app
cd app
npm run ios / npm run android
```

The following command will automatically copy over changes made to the plugin to the app.

```
npm run watch
```
