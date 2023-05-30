import Add from "../pages/Add/Add";
import Detail from "../pages/Detail/Detail";
import Home from "../pages/Home/Home";
import SiteRoot from "../pages/SiteRoot/SiteRoot";
import Wishlist from "../pages/Wishlist/Wishlist";

export const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "add",
        element: <Add />
      },
      {
        path: ":id",
        element: <Detail />
      },
      {
        path: "wishlist",
        element: <Wishlist />
      }
    ],
  },
];
