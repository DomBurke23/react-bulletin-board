import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import NewPost from "./components/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import "./index.css";

// The code here is executed first when this website is being loaded into the browser.
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <App /> }, // our domain
      { path: "/create-post", element: <NewPost /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
