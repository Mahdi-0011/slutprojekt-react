/** @format */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import RootLayout from "./Rootlayout/Rootlayout";
import Home from "./pages/home/home";
import Favorites from "./pages/favorites/favorites";
import ContextProvider from "./context/context";

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
      <ContextProvider>
        <RouterProvider router={router} />;
      </ContextProvider>
    </>
  );
}

export default App;
