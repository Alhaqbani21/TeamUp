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
import Landingpage from '../pages/Landingpage';

import { AuthProvider } from '../contexts/AuthContext';
import ProtectedRoute from '../components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landingpage />,
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
    path: '/Home',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: '/top10',
    element: (
      <ProtectedRoute>
        <Top10 />
      </ProtectedRoute>
    ),
  },
  {
    path: '/Players',
    element: (
      <ProtectedRoute>
        <Reservation />
      </ProtectedRoute>
    ),
  },
  {
    path: '/Book',
    element: (
      <ProtectedRoute>
        <Book />
      </ProtectedRoute>
    ),
  },
  {
    path: '/Booking/:id',
    element: (
      <ProtectedRoute>
        <Booking />
      </ProtectedRoute>
    ),
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
]);

function Router() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default Router;
