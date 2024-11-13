import { Suspense } from 'react';

import { ReactQueryProvider } from '@omnidb/request';

import { RouterProvider } from 'react-router-dom';

import { router } from './router';

function App() {
  return (
    <ReactQueryProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ReactQueryProvider>
  );
}

export default App;
