import { memo } from 'react'
import { Provider } from 'react-redux'

import Layout from './components/layout'
import { store } from './store/store'

const App = memo(() => (
  <Provider store={store}>
    <Layout />
  </Provider>
))

export default App
