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
import View_assignment from "../Public_private_page/View_assignment/View_assignment";
import Assignment_lavel from "../Public_private_page/ALL _Assignment/Assignment_lavel";
import Take_assignment from "../Public_private_page/View_assignment/Take_assignment";
import All_assidnment_sgow from "../Public_private_page/ALL _Assignment/all_assignment_show";

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
          element: <Private_Route> <Create_Assignment></Create_Assignment> </Private_Route> 
        },
        {
          path:'my_assignment',
          element:<Private_Route> <My_Assignment></My_Assignment></Private_Route> 
        },
      
        {
          path:'all_assignment',
          element:<All_assignment></All_assignment>,
          loader:() => fetch('https://online-goup-stady-server.vercel.app/app/v1/allassignment') 
        },
        {
          path:'submitted_assignment',
          element: <Private_Route> <Submitted_Assignment></Submitted_Assignment></Private_Route> ,
          loader:() => fetch('https://online-goup-stady-server.vercel.app/app/v1/submited') 
        },
        {
          path:'update_assignment/:id',
          element:  <Private_Route> <Update_Assignment></Update_Assignment> </Private_Route>,
          loader:({params}) => fetch(`https://online-goup-stady-server.vercel.app/app/v1/allassignment/${params.id}`)  

        },
        {
          path:'view_assignment/:id',
          element:  <Private_Route> <View_assignment></View_assignment> </Private_Route>,
          loader:({params}) => fetch(`https://online-goup-stady-server.vercel.app/app/v1/allassignment/${params.id}`)  

        },
        {
          path:'/take_assignment',
          element:<Take_assignment></Take_assignment>
        }


       /*  {
          path:'assignment_lavel/:difficulty_level',
          element:  <Assignment_lavel></Assignment_lavel>,
          loader:() => fetch('https://online-goup-stady-server.vercel.app/app/v1/allassignment')  

        } */
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
