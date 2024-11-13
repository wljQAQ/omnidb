import React from 'react';

import { createBrowserRouter, RouteObject } from 'react-router-dom';

const Table = React.lazy(() => import('../components/Workbench'));
const Auth = React.lazy(() => import('../pages/auth/auth'));
const AuthCallback = React.lazy(() => import('../pages/auth/oauth-callback'));

const routes: RouteObject[] = [
  {
    path: '/:bitableId',
    Component: Table
  },
  {
    path: '/auth',
    Component: Auth
  },
  {
    path: '/oauth/callback',
    Component: AuthCallback
  }
];

export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter(routes);
