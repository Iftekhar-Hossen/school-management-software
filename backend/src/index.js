import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'antd/dist/reset.css';
import { BrowserRouter } from "react-router-dom";
import "./index.css"
import store from './app/store';
import { Provider, useSelector } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

);


