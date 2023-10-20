import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layut from './componentes/Layut';
import Home from './Home';
import Form from './componentes/Form';
import MainHome from './componentes/MainHome';
import Addproduct from './addProducts/Addproduct';
import ShowProduct from './showProducts/ShowProduct';
import SeeDetail from './showProducts/SeeDetail';
import MyCart from './mycart/MyCart';
import Update from './update/Update';
import Register from './register/Register';
import AuthProvider from './authentication/AuthProvider';
import PrivetRout from './privet/PrivetRout';
import ErrorPage from './errorpage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layut></Layut>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
         path:'/',
         element:<MainHome></MainHome>,
         loader:() => fetch('https://mongodb-express-83yh9mh1e-naymul-islams-projects.vercel.app/brands'),
      },
      {
        path:'/addProduct',
        element:<PrivetRout> <Addproduct></Addproduct> </PrivetRout>
      },
      {
        path: '/products/:brand',
        element:<PrivetRout> <ShowProduct></ShowProduct> </PrivetRout> ,
        loader: ({ params }) => fetch(`https://mongodb-express-83yh9mh1e-naymul-islams-projects.vercel.app/products/${params.brand}`) //.then((response) => response.json())
        
      },
      {
      path:'/seeDetails/:id',
      element:<SeeDetail></SeeDetail>,
      loader:({params}) => fetch(`https://mongodb-express-83yh9mh1e-naymul-islams-projects.vercel.app/product/${params.id}`)
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params}) => fetch(`https://mongodb-express-83yh9mh1e-naymul-islams-projects.vercel.app/product/${params.id}`)
      },
      {
        path:'/mycart',
        element:<PrivetRout> <MyCart></MyCart></PrivetRout>,
        loader:() => fetch('https://mongodb-express-83yh9mh1e-naymul-islams-projects.vercel.app/carts')
      },
      {
        path:'/login',
        element:<Home></Home>,
        
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'from',
        element:<Form></Form>,
        loader:() => fetch('https://mongodb-express-83yh9mh1e-naymul-islams-projects.vercel.app/users')
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
