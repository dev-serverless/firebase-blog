import ReactDOM from "react-dom/client";
import "index.css";
import App from "App";
import { BrowserRouter } from "react-router-dom";
import Header from "components/Header";
import { AuthContextProvider } from "context/AuthContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>
  </AuthContextProvider>
);
