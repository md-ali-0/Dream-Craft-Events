import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { AuthProdiver } from "./authProvider/AuthProvider";
import "./index.css";
import Router from "./router/Router.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProdiver>
                <Toaster />
                <RouterProvider router={Router} />
            </AuthProdiver>
        </QueryClientProvider>
    </React.StrictMode>
);