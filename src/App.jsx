import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Nav/navbar';
import AppRoutes from './AppRoutes'; 

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

