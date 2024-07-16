import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Reservation from '../pages/Reservation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  }, {
    path: '/player',
    element: <Reservation />,
  },
]);
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
