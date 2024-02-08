import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { HausThemeProvider } from "@daohaus/ui";

import { App } from "./App";

import "./App.css";
import { halfHotDogTheme } from "./theme/theme";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <HausThemeProvider themeOverrides={halfHotDogTheme} >
          <App />
        </HausThemeProvider>
      </QueryClientProvider>
    </HashRouter>
  </React.StrictMode>
);
