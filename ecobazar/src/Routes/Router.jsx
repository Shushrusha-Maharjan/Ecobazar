import { createBrowserRouter } from "react-router-dom";
import Pages from "../Pages";
import Shop from "../Pages/Shop";
import App from "../App";
import Home from "../Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Cart from "../Pages/Cart";
import Index from "../Pages/Index";


const Move = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/single/:id",
        element: <Index />,
      },
      {
        path: "/pages",
        element: <Pages />,
      },
      {
        path: "/signin",
        element: <SignIn/>,
      },
      {
        path: "/signup",
        element: <SignUp/>,
      },
    ],
  },
]);
export { Move };