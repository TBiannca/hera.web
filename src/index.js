import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './app'
import { configureStore } from './startup/create-store'
import index from './index.css'

ReactDOM.render( <React.StrictMode>
  <Provider store={configureStore()}>
    <App />
  </Provider>
</React.StrictMode>, document.getElementById('root'))
