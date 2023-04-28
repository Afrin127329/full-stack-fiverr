import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.scss';
import { Footer, Navbar } from './components';
import { Add, Gig, Gigs, Home, Login, Message, Messages, MyGigs, Orders, Register } from './pages';

const App = () => {

  const Layout = ()=>{
    return <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
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
      ],
    },
  ])



  return <RouterProvider router={router}/>;
}


export default App
