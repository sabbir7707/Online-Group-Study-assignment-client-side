import { createBrowserRouter } from "react-router-dom";
import Mainroute from "./Mainroute";

import  Login from "../Page/Login";
import  Register from "../Page/Register";
import Home from "../Page/Home";
import ErrorPage from "../Page/ErrorPage";
import Create_Assignment from "../Public_private_page/create_assignment/Create_Assignment";
import My_Assignment from "../Public_private_page/My_assignment/My_Assignment";
import All_assignment from "../Public_private_page/ALL _Assignment/All_assignment";
import Submitted_Assignment from "../Public_private_page/Submitted_assignment/Submitted_Assignment";
import Private_Route from "./Private_Route";
import Update_Assignment from "../Public_private_page/Update_assignment/Update_Assignment";

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
          path:'create_assignment',
          element:<Create_Assignment></Create_Assignment>
        },
        {
          path:'my_assignment',
          element:<Private_Route> <My_Assignment></My_Assignment></Private_Route> 
        },
        {
          path:'all_assignment',
          element:<All_assignment></All_assignment>,
          loader:() => fetch('http://localhost:5000/app/v1/assignment') 
        },
        {
          path:'submitted_assignment',
          element: <Private_Route> <Submitted_Assignment></Submitted_Assignment></Private_Route> 
        },
        {
          path:'update_assignment',
          element: <Update_Assignment></Update_Assignment>

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
