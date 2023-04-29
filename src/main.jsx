import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import LoginPage from "./Pages/LoginPage"
import ErrorPage from "./error-page";
import CheckoutPage from "./Pages/CheckoutPage"
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from './components/Layout';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/login",
//     element: <LoginPage />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/checkout",
//     element: <CheckoutPage />,
//     errorElement: <ErrorPage />,
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App/>}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/checkout" element={<CheckoutPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
