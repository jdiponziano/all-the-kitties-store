import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { UserProvider } from "contexts/user.context";
import { CategoriesProvider } from "contexts/categories.context";
import { CartProvider } from "contexts/cart.context";
import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
