import { Navigator } from 'react-native'
import React from 'react'

import scenes from './scenesIndex'

const renderer = (route, navigator) => {
  switch (route.index) {
    case 0:
      return scenes.content.schedule(navigator)
    case 1:
      return scenes.content.sponsors(navigator)
    case 2:
      return scenes.content.speaker(navigator)
    default:
      return scenes.content.schedule(navigator)
  }
}

const App = () => (
  <Navigator
    initialRoute={scenes.index[2]}
    initialRouteStack={scenes.index}
    renderScene={(route, nav) => renderer(route, nav)}
  />
)

export default App
