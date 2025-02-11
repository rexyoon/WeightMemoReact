import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WeightPage from "./pages/WeightPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WeightPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
