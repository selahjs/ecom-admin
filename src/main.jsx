import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import App from './App'
import LoginPage from "./Pages/LoginPage"
import Table from './components/Table';
import ErrorPage from "./error-page";
import CheckoutPage from "./Pages/CheckoutPage"
import Layout from './components/Layout';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* the Provider below is from Redux */}
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App/>}/>
            <Route path="/admin" element={<Table />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/checkout" element={<CheckoutPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
