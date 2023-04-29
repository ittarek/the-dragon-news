import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayOut from "../layout/newsLayOut/newsLayOut";
import News from "../pages/news/news/News";
import LogInLayOut from "../layout/LogInLayOut";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import PrivetRoue from "./PrivetRoue";
import Trams from "../pages/Trams/Trams";

export const router = createBrowserRouter([

  {
    path:'/',
    element:<LogInLayOut></LogInLayOut>,
    children: [
      {
path:'/',
element:<Navigate to="/category/0"></Navigate>
      },
      {
        path:'/login',
        element:<LogIn></LogIn>
      },
      {

        path:'/register',
        element:<Register></Register>
      },
      {
        path: "trams",
        element: <Trams></Trams>
      }
    ]
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
    
      {
        path:':id',
        element:<Category></Category>,
        loader:({params}) => fetch(`https://the-news-dragon-server-ittarek.vercel.app/catagories/${params.id}`)
          
      },
    ],
  },{
    path:'news',
    element:<NewsLayOut></NewsLayOut>,
    children:[

      {
        path:':id',
        element:<PrivetRoue><News></News>,</PrivetRoue>,
        loader: ({params}) =>fetch(`https://the-news-dragon-server-ittarek.vercel.app/news/${params.id}`)
      }
    ]
  }
]);
