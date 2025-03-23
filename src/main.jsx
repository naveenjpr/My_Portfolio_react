import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
])
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
