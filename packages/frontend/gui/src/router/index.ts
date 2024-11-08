import React from 'react';

import { createBrowserRouter, RouteObject } from 'react-router-dom';

const Table = React.lazy(() => import('../components/Workbench'));
const Login = React.lazy(() => import('../pages/login'));

const routes: RouteObject[] = [
  {
    path: '/:bitableId',
    Component: Table
  },
  {
    path: '/login',
    Component: Login
  }
];

export const router = createBrowserRouter(routes);
