import React from "react";
import ReactDOM from "react-dom/client";
import "index.css";
import App from "App";
import { BrowserRouter } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import firebase from "firebaseApp";

console.log(firebase);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
