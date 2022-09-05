import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Covid from "./pages/covid/Covid";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Profile from "./pages/profile/Profile";
import New from "./pages/new/New";
import "./i18next";
import Products from "./pages/products/Products";
import { productInputs, userInputs } from "./formSource";
const root = ReactDOM.createRoot(document.getElementById("root"));
// const user = localStorage.getItem("token");

root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="login" element={<Login />} />
          {/* <Route index element={<Home />} /> */}
          <Route path="signup" element={<SignUp />} />
          <Route path="profile" element={<Profile />} />
          <Route path="covid" element={<Covid />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
          <Route path="products">
            <Route index element={<Products />} />
            <Route path=":productId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={productInputs} title="Add New Product" />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </DarkModeContextProvider>
  </React.StrictMode>
);
