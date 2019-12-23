import { AppRegistry } from 'react-native'

import App from 'components/src/App'

AppRegistry.registerComponent('monorepo_example', () => App)
AppRegistry.runApplication('monorepo_example', {
  rootTag: document.getElementById('root'),
})