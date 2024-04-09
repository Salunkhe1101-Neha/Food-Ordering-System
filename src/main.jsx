import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './Component/About.jsx'
import ContactUs from './Component/ContactUs.jsx'
import Error from './Component/Error.jsx'
import Body from './Component/Body.jsx'
import Cart from './Component/Cart.jsx'
import RestaurantMenu from './Component/RestaurantMenu.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
// import Grocery from './Component/Grocery.jsx'

const Grocery=lazy(()=>import("./Component/Grocery.jsx"));
const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
         path:'/',
         element:<Body/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<ContactUs/>
      },
      {
       path:'/grocery',
       element:<Suspense fallback={<><h1>Loadding...</h1></>}><Grocery/></Suspense>
      },
      {
        path:'/restaurantMenu/:id',
        element:<RestaurantMenu/>
      },
      {
        path:'/cart',
        element:<Cart/>
      }
      
    ],
    errorElement:<Error/>
  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider router={appRouter} />
)
