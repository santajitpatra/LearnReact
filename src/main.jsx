import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CounterProvider } from "./context/Counter.jsx";
import { AppProvider } from "./context/contextNews.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </AppProvider>
  </React.StrictMode>
);
