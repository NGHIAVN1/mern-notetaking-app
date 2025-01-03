import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";

import {
  createBrowserRouter
} from "react-router-dom";
import Layout from "./components/pages/layout.jsx";
export  function App() {
  return (
  <BrowserRouter future={{ v7_startTransition: true }}>
    <Routes>
      <Route path="/" element={<Layout />}/>
      <Route path="/trash" element={<h1>trash</h1>}/>
      <Route path="/markdown" element={<h1>markdown</h1>}/>
      <Route path="/trash" element={<h1>trash</h1>}/>
    </Routes>
  </BrowserRouter>
  ) 
}


ReactDOM.createRoot(document.getElementById("root")).render(
  < App />
);
