import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// public/index.html 에서 root를 가져와 react render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
