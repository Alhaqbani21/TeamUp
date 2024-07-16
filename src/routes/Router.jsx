import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Top10 from '../pages/Top10';

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
]);
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
