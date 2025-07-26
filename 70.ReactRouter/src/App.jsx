import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import DashBoard from "./components/DashBoard";
import NavBar from "./components/NavBar";
import ParamComponent from "./components/ParamComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home />
        <NavBar />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <About />
        <NavBar />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <DashBoard />
        <NavBar />
      </div>
    ),
  },
  {
    path: "/student/:id",
    element: (
      <div>
        <NavBar />
        <ParamComponent />
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
