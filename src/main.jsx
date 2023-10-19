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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layut></Layut>,
    children:[
      {
         path:'/',
         element:<MainHome></MainHome>,
         loader:() => fetch('http://localhost:5000/brands'),
      },
      {
        path:'/addProduct',
        element:<Addproduct></Addproduct>
      },
      {
        path: '/products/:brand',
        element: <ShowProduct></ShowProduct>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brand}`) //.then((response) => response.json())
        
      },
      {
      path:'/seeDetails/:id',
      element:<SeeDetail></SeeDetail>,
      loader:({params}) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params}) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path:'/mycart',
        element:<MyCart></MyCart>,
        loader:() => fetch('http://localhost:5000/carts')
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
        loader:() => fetch('http://localhost:5000/users')
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
