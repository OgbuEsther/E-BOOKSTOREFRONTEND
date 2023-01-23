import React from "react";
import { useRoutes } from "react-router-dom";
import SingleBook from "../Books/SingleBook";
import Create from "../Create/Create";
import Homescreen from "../Homescreen";
import Uploads from "../Ups/Uploads";

const Allroutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Homescreen />,
    },
    {
      path: "/books/:id/details",
      element: <SingleBook />,
    },
    {
      path: "/uploads",
      element: <Uploads />,
    },
  ]);

  return element;
};

export default Allroutes;
