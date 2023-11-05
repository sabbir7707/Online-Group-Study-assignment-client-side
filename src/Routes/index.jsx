import { createBrowserRouter } from "react-router-dom";
import Mainroute from "./Mainroute";
import About from "../Page/About";
import  Login from "../Page/Login";
import  Register from "../Page/Register";
import Contact from "../Page/Contact";
import Home from "../Page/Home";
import ErrorPage from "../Page/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainroute></Mainroute>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[

        {
          index:true,
          element:<Home></Home>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'contact',
          element:<Contact></Contact>
        }
      ]
    },
    
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      }
    
  ]);
  export default router ;
