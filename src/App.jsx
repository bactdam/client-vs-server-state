import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BlogsPage from "./pages/blogs";
import BlogPage from "./pages/blogs/:id";
import { AppShell } from "./components/AppShell";

const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      {
        path: "/",
        element: <BlogsPage />,
      },
      {
        path: "/:id",
        element: <BlogPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
