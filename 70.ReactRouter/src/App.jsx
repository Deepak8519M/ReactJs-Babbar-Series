import React, { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import DashBoard from "./components/DashBoard";
import NavBar from "./components/NavBar";
import ParamComponent from "./components/ParamComponent";
import Courses from "./components/Courses";
import MockTest from "./components/MockTest";
import Reports from "./components/Reports";

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
    children: [
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "mocktest",
        element: <MockTest />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
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
  {
    path: "*",
    element: <NotFound />,
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
