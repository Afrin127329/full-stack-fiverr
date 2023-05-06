import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import React from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import { Footer, Navbar } from './components';
import { Add, Gig, Gigs, Home, Login, Message, Messages, MyGigs, Orders, Register } from './pages';
import Pay from "./pages/pay/Pay";
import Success from "./pages/success/Success";
import AppContext from "./utils/context";


const App = () => {
  const queryClient = new QueryClient();

  const Layout = ()=>{
    return <div>
      <AppContext>
      <QueryClientProvider client={queryClient}>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </QueryClientProvider>
      </AppContext>
    </div>
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/gigs',
          element: <Gigs/>
        },
        {
          path: '/myGigs',
          element: <MyGigs/>
        },
        {
          path: '/orders',
          element: <Orders/>
        },
        {
          path: '/messages',
          element: <Messages/>
        },
        {
          path: '/message/:id',
          element: <Message/>
        },
        {
          path: '/add',
          element: <Add/>
        },
        {
          path: '/gig/:id',
          element: <Gig/>
        },
        {
          path: '/register',
          element: <Register/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: "/pay/:id",
          element: <Pay />,
        },
        {
          path: "/success",
          element: <Success />,
        },
      ],
    },
  ])



  return <RouterProvider router={router}/>;
}


export default App
