/** @format */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import RootLayout from "./Rootlayout/Rootlayout";
import Home from "./pages/home/home";
import Favorites from "./pages/favorites/favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "Favorites", element: <Favorites /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
