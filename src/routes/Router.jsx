import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Top10 from '../pages/Top10';
import Reservation from '../pages/Reservation';
import Book from '../pages/Book';
import Booking from '../pages/Booking';
import Profile from '../pages/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/SignUp',
    element: <SignUp />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/top10',
    element: <Top10 />,
  },
  {
    path: '/Players',
    element: <Reservation />,
  },

  {
    path: '/Book',
    element: <Book />,
  },
  {
    path: '/Booking/:id',
    element: <Booking />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
]);
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
