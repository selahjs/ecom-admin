import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import App from './App'
import PopularItems from './Pages/PopularItems'
import LoginPage from "./Pages/LoginPage"
import SignUp from "./components/SignUp"
import ForgotPassword from "./components/ForgotPassword"
import ErrorPage from "./error-page";
import CheckoutPage from "./Pages/CheckoutPage";
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import Invoice from './components/Invoice';
import Layout from './components/Layout';
import './index.css'
import Admin from './Pages/Admin';
import AutheRequired from './components/AutheRequired';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* the Provider below is from Redux */}
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path="*" element={<ErrorPage/>}/>
          <Route path="/" element={<Layout />}>
            <Route index element={<App/>}/>
            <Route path="/popular" element={<PopularItems/>}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/forgotpassowrd" element={<ForgotPassword />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/checkout" element={<CheckoutPage />}/>
            <Route path="/productDetailt" element={<ProductDetail />}/>
            <Route path="/invoice" element={<Invoice />}/>
            <Route element={<AutheRequired />}>
              <Route path="/admin" element={<Admin />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
