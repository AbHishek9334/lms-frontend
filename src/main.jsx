import React from 'react'
import {BrowserRouter} from "react-router-dom"
import {Toaster} from "react-hot-toast"
import App from './App.jsx'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Provider } from 'react-redux'
import store from './Redux/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
      <BrowserRouter>
        <App/>
        <Toaster/>
    
      </BrowserRouter>
   </Provider>

  
)
