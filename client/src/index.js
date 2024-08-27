import "./global.css"

import React from 'react';
import ReactDOM from 'react-dom/client';
import{
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom"

 import Home from './views/Home/Home';
 import Login from './views/Login/Login';
 import SignUp from './views/SignUp/SignUp';
 import AddBlog from "./views/AddBlog/AddBlog";
 import  UpdateBlog from "./views/UpdateBlog/UpdateBlog"



 const root = ReactDOM.createRoot(document.getElementById("root"))
 const router =  createBrowserRouter([
     {
         path:"/",
         element:< Home/>
     },
     {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/signup",
        element:<SignUp/>
    },
    {
        path: '/add-blog',
        element: <AddBlog />
      },
      {
        path: '/update/:_id',
        element: <UpdateBlog />
      },



     {
      path:"*",
      element:<> 404 not found</>
  }
])
root.render(<RouterProvider router={router}/>)


