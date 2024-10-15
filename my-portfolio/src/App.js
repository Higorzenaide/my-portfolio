import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import GlobalStyles from './styles/GlobalStyles'; // Corrigido o import

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyles />
    </>
  );
}

export default App;
