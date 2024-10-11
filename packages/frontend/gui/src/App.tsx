import { ReactQueryProvider } from '@omnidb/request';

import { RouterProvider } from 'react-router-dom';

import router from './router';

function App() {
  return (
    <ReactQueryProvider>
      <RouterProvider router={router}></RouterProvider>
    </ReactQueryProvider>
  );
}

export default App;
