// import React from 'react'
// import {createBrowserRouter, RouterProvider} from 'react-router';
// // import AuthLayout from '../Layout/AuthLayout';
// // import MainLayout from '../Layout/MainLayout';
// // import Loginpage from '../pages/Loginpage';
// // import Registerpage from '../pages/Registerpage';
// // import ProtectedRoute from './ProtectedRoute';
// // import PublicRoute from './PublicRoute';
// // import Home from '../pages/Home';
// // import Shop from '../pages/Shop';
// // import About from '../pages/About';
// // import Cart from '../pages/Cart';

// import { lazy } from "react";

// const AuthLayout = lazy(() => import("../Layout/AuthLayout"));
// const MainLayout = lazy(() => import("../Layout/MainLayout"));

// const Loginpage = lazy(() => import("../pages/Loginpage"));
// const Registerpage = lazy(() => import("../pages/Registerpage"));

// const ProtectedRoute = lazy(() => import("./ProtectedRoute"));
// const PublicRoute = lazy(() => import("./PublicRoute"));

// const Home = lazy(() => import("../pages/Home"));
// const Shop = lazy(() => import("../pages/Shop"));
// const About = lazy(() => import("../pages/About"));
// const Cart = lazy(()=> import("../pages/Cart"));

// const AppRoutes = () => {
//     let router = createBrowserRouter([
//         {
//             path:"/",
//             element:<PublicRoute/>,
//             children:[
//                 {
//                     path:"",
//                     element:<AuthLayout/>,
//                     children:[
//                 {
//                     path:"",
//                     element:<Loginpage/>
//                 },
//                 {
//                     path:"/register",
//                     element:<Registerpage/>
//                 }
//             ]
//                 }
//             ]
            
//         },
//         {
//             path:"/main",
//             element:<ProtectedRoute/>,
//             children:[
//                 {
//                     path:"",
//                     element:<MainLayout/>,
//                     children:[
//                         {
//                             path:"",
//                             element:<Home/>
//                         },
//                         {
//                             path:"shop",
//                             element:<Shop/>
//                         },
//                         {
//                             path:"about",
//                             element:<About/>
//                         },
//                         {
//                             path:"cart",
//                             element:<Cart/>
//                         }
                        
//                     ]
//                 }
//             ]
//         }
//     ],
//     {
        
//     basename: "/SkyMart",
  
//     }
// )
//   return <RouterProvider router={router}/>
// }

// export default AppRoutes



import React, { lazy } from "react";
import { createHashRouter, RouterProvider } from "react-router";

const AuthLayout = lazy(() => import("../Layout/AuthLayout"));
const MainLayout = lazy(() => import("../Layout/MainLayout"));
const Loginpage = lazy(() => import("../pages/Loginpage"));
const Registerpage = lazy(() => import("../pages/Registerpage"));
const ProtectedRoute = lazy(() => import("./ProtectedRoute"));
const PublicRoute = lazy(() => import("./PublicRoute"));
const Home = lazy(() => import("../pages/Home"));
const Shop = lazy(() => import("../pages/Shop"));
const About = lazy(() => import("../pages/About"));
const Cart = lazy(() => import("../pages/Cart"));

const AppRoutes = () => {

  let router = createHashRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Loginpage />
            },
            {
              path: "register",
              element: <Registerpage />
            }
          ]
        }
      ]
    },

    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Home />
            },
            {
              path: "shop",
              element: <Shop />
            },
            {
              path: "about",
              element: <About />
            },
            {
              path: "cart",
              element: <Cart />
            }
          ]
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;