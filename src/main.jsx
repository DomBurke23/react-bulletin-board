import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App, { loader as appLoader } from "./routes/App.jsx";
import NewPost, { action as newPostAction } from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import "./index.css";
import PostDetails, { loader as postDetailsLoader } from "./routes/PostDetails";

// The code here is executed first when this website is being loaded into the browser.
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: appLoader,
        children: [
          // adding / makes it an absolute path , its a relative path if you omit /
          { path: "/create-post", element: <NewPost />, action: newPostAction },
          {
            path: "/:postId",
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
