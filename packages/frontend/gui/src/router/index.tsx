import React from 'react';

import { createBrowserRouter, RouteObject } from 'react-router-dom';

const Table = React.lazy(() => import('../components/Workbench'));

const routes: RouteObject[] = [
  {
    path: '/:bitableId',
    element: <Table />
  }
];

const router = createBrowserRouter(routes);

export default router;
