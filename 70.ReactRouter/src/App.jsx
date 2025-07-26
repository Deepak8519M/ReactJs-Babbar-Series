import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import DashBoard from "./components/DashBoard";
import NavBar from "./components/NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <NavBar />
    </div>
  );
}

export default App;
