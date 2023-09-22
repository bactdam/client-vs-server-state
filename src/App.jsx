import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BlogsPage from "./pages/blogs";
import BlogPage from "./pages/blogs/:id";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BlogsPage />,
  },
  {
    path: "/:id",
    element: <BlogPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
