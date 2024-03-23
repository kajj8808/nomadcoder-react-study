import Layout from "./Layout";
import { createBrowserRouter } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon";
import NowPlaying from "./pages/NowPlaying";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: ":id",
          },
        ],
      },
      {
        path: "coming-soon",
        element: <ComingSoon />,
        children: [
          {
            path: ":id",
          },
        ],
      },
      {
        path: "now-playing",
        element: <NowPlaying />,
        children: [
          {
            path: ":id",
          },
        ],
      },
    ],
  },
]);
