import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import FindPassword from "./pages/Auth/FindPassword"
import ChangePassword from "./pages/Auth/ChagnePassword"
import Products from "./pages/Product/Products"
import ProductDetail from "./pages/Product/ProductDetail";
import Orders from "./pages/Order/Orders";
import {ReactQueryProvider} from "./Provider";
import {AuthContextProvider} from "./context/AuthContext";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "./lang/i18n"

import Profile from "./pages/Auth/Profile";
import ProductPost from "./pages/Product/ProductPost";
import Rating from "./pages/Auth/Rating";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                path: "/",
                element: <Home/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/signup",
                element: <Signup/>
            },
            {
                path:"/find/password",
                element: <FindPassword/>
            },
            {
                path: "/change/password",
                element: <ChangePassword/>
            },
            {
                path: "/products",
                element: <Products/>
            },
            {
                path:"/product/:id",
                element: <ProductDetail/>
            },
            {
                path: "/profile",
                element: <Profile/>
            },
            {
                path: "/order",
                element: <Orders/>
            },
            {
                path: "/register",
                element: <ProductPost/>
            },
            {
                path: "/rating",
                element: <Rating/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ReactQueryProvider>
          <AuthContextProvider>
            <RouterProvider router={router}/>
              <ReactQueryDevtools initialIsOpen={false}/>
          </AuthContextProvider>
      </ReactQueryProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
