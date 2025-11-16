import Home from "../home/Home"
import Service from "../Components/Service"
import About from "../Components/About"
import Expertise from "../Components/Expertise"
import Contact from "../Components/Contact"
import Layout from "./Layout"
import { createBrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "../Errors/ErrorBoundary";
import PatentProtection from "../service/PatentProtection"
import CopyrightProtection from "../service/CopyrightProtection"
import TrademarkRegistration from "../service/TrademarkRegistration"
import IPResearch from "../service/IPResearch"
import InnovationStrategy from "../service/InnovationStrategy"


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
                },
                {
                    path:"/service/patent",
                    element:<PatentProtection/>
                },
                {
                    path:"/service/copyright",
                    element:<CopyrightProtection/>
                },
                {
                    path:"/service/trademark",
                    element:<TrademarkRegistration/>
                },
                {
                    path:"/service/research",
                    element:<IPResearch/>
                },
                {
                    path:"/service/innovation",
                    element:<InnovationStrategy/>
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