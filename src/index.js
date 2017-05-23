import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import{ createLogger} from 'redux-logger'
import thunk from 'redux-thunk';

const store = createStore(reducer,applyMiddleware(createLogger(),thunk))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
