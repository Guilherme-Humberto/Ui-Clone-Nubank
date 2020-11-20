
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Main from './pages/Main/index'
import Home from './pages/Home/index'

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Main
  })
)

export { Routes }
