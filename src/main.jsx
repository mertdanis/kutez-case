import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import { MainContext } from "./store/MainContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <MainContext>
    <App />
  </MainContext>
  // </React.StrictMode>,
);
