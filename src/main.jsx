import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout.jsx";
import { Home } from "./Pages/Home.jsx";
import { AddCoffee } from "./Pages/AddCoffee.jsx";
import { UpdateCoffee } from "./Pages/UpdateCoffee.jsx";
import { CoffeeDetails } from "./Pages/CoffeeDetails.jsx";
import { Error } from "./Pages/Error.jsx";
import { Login } from "./Pages/Login.jsx";
import { AuthProvider } from "./Provider/Authprovider.jsx";
import { Registration } from "./Pages/Registration.jsx";
import { User } from "./Pages/User.jsx";
import { PrivateRouter } from "./Layout/PrivateRouter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/coffeeDetails/:id",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "*",
        element: <Error></Error>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/user",
        element: (
          <PrivateRouter>
            <User></User>
          </PrivateRouter>
        ),
        loader: () => fetch("http://localhost:5000/users"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
