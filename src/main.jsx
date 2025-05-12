import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from "./components/App/App.jsx"
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);