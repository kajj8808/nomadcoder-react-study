import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

/* 
Home Page (/): Display a list of all the Disney characters.
Detail Page (/character/:id): Display the character detail. 
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/character/:id", element: <Detail /> },
    ],
  },
]);

export default router;
