import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Store } from "./store/store";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Store>
          <App />
        </Store>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
