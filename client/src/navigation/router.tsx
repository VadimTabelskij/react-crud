import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layouts/navbar-layout';
import HomePage from 'pages/home-page';
import SingleCarPage from 'pages/home-page/single-car-page';
import CarFormPage from 'pages/home-page/car-form-page';
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
    ],
  },
]);

export default router;
