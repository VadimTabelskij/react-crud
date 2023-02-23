import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layouts/navbar-layout';
import HomePage from 'pages/home-page';
import CarFormPage from 'pages/car-form-page';
import SingleCarPage from 'pages/single-car-page';
import routes from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.SingleCarPage.path,
        element: <SingleCarPage />,
      },
      {
        path: routes.CarFormPage,
        element: <CarFormPage />,
      },
      {
        path: routes.UpdateCarPage.path,
        element: <CarFormPage />,
      },
    ],
  },
]);

export default router;
