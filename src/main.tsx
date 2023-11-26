import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@/routes/HomePage";
import AboutPage from "@/routes/AboutPage";
import ProjectsPage from "@/routes/ProjectsPage";
import ContactPage from "@/routes/ContactPage";
import ErrorPage from "@/routes/404";
import "@/scss/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "projects",
    element: <ProjectsPage />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
