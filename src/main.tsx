import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./styles/styledGlobalTheme";
import "./styles/reset.css";
import { GlobalStyle } from "./styles/styledGlobal";
import { ThemeProvider } from "styled-components";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
