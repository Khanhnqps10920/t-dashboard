import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// redux import
import store from './components/redux/store'
import { Provider } from 'react-redux'
// redux import

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
