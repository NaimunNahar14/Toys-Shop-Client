import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Others from "../Layout/Others";
import Blogs from "../Pages/Blogs";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Addtoys from "../Pages/AddToys/Addtoys";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
    
      ]
    },
    {
        path:'/',
        element: <Others></Others>,
        children:[
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<Signup></Signup>
            },
            {
                path:'/addtoy',
                element: <Addtoys></Addtoys>
            },
            {
                path:'/alltoys',
                element:<AllToys></AllToys>
            },
            {
                path: '/mytoys',
                element:<PrivateRoutes> <MyToys></MyToys></PrivateRoutes>
            },
           
        ]
    }
  ]);
  export default router;

