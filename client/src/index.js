import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import './index.css'
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
