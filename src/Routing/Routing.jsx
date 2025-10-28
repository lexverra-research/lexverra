import Home from "../home/Home"
import Service from "../Components/Service"
import About from "../Components/About"
import Expertise from "../Components/Expertise"
import Contact from "../Components/Contact"
import Layout from "./Layout"
import { createBrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "../Errors/ErrorBoundary";


export const router=createBrowserRouter(
    [
        {
            path:"/",
            element: <Layout/>,
            children:[
                {
                    index:true,
                    element:<Home/>
                },
                {
                    path:"/service",
                    element:<Service/>
                },
                {
                    path:"/about",
                    element:<About/>
                },
                {
                    path:"/expertise",
                    element:<Expertise/>
                },
                {
                    path:"/contact",
                    element:<Contact/>
                }


            ]
        }
        ,{
            path:"*",
            element:<ErrorBoundary/>,
            errorElement:<ErrorBoundary/>
        }
    ]
)