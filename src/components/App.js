import { Navigator } from 'react-native'
import React from 'react'

import rootScene from '../scenes/root'
import sponsorsScene from '../scenes/sponsors'

const scenes = [
  {
    title: 'Root',
    index: 0,
  },
  {
    title: 'Sponsors',
    index: 1,
  },
]

const renderer = (route, navigator) => {
  if (!route) {
    return <sponsorsScene navigator={navigator} />
  }

  switch (route.id) {
    case 'Sample':
      return rootScene
    case 'Sponsors':
      return sponsorsScene
    default:
      return rootScene
  }
}

const App = () => (
  <Navigator
    initialRoute={scenes[0]}
    initialRouteStack={scenes}
    renderScene={(route, nav) => renderer(route, nav)}
  />
)

export default App
