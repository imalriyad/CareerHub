import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppliedJob from "./Components/AppliedJob";
import Blog from "./Components/Blog";
import Home from './Components/Home';
import NotFound from "./Components/NotFound";
import Root from "./Components/Root";
import Jobdetails from "./Components/FeaturedJob/Jobdetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <NotFound/>, 
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/appliedJobs",
        element: <AppliedJob />,
        loader: ()=> fetch(`https://api.npoint.io/879f3c5be452e1ff90d4`),
      },
      {
        path: "/blog",
        element: <Blog/>,
      },
      {
        path:'/featurejob/:Id',
        loader: ()=> fetch(`https://api.npoint.io/879f3c5be452e1ff90d4`),
        element: <Jobdetails/>,
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
