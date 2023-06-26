import { useRoutes } from "react-router-dom";

import Signin from "./pages/Signin";
import AuthLayout from "./Layouts/AuthLayout";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import SignUp from "./pages/SignUp";
import SignUpData from "./pages/SignUpData";
import SignUpShow from "./admin/SignUpShow";


export default function Router() {
    
    
  let element = useRoutes([
    {
      element: <AuthLayout/>,
      children: [
        { path: "/signin", element: <Signin/> },
        // { path: "/", element: <SignUp /> 
        { path: "/", element: <SignUpData/>}, 
        // { path: "/forgot-password", element: <ForgotPassword /> },
      ]
    },
    {
      element: <MainLayout/>, 
      children: [
        { path: "/home", element: <Home /> },
        { path: "/aboutus", element: <AboutUs/> },
        { path: "/signupshow", element: <SignUpShow/> },
        // { path: "/history", element: <History /> },
        // { path: "/inbox", element: < Inbox/> },
        // { path: "/manage-users/:val",   element: < ManageUsers/> },
      ]
    },
    {
      children: [
        {path: "*", element: <>404 Page not Found</>}
      ]
    },
  ]);

  return element;
}
