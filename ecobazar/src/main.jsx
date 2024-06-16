import React from 'react';
import ReactDOM from 'react-dom/client';
import Favicon from "react-favicon";
import { RouterProvider } from 'react-router-dom';
import { Move } from './Routes/Router';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Favicon url="../src/assets/img/favicon.png"/>
    <Provider store={store}>
    <RouterProvider router={Move}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)