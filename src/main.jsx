import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ourStore } from './store/index';
import { ourRouter } from './router/router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ourStore}>
      <RouterProvider router={ourRouter} />
    </Provider>
  </React.StrictMode>
);
