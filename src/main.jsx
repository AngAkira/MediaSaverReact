import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./Pages/Home/Home";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <div className="app">
            <div className="breadcrumb">
                Home - Desktop
            </div>

            <Home />
        </div>
    </React.StrictMode>
);