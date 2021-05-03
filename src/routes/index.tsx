import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from '../styles/GlobalStyle';

// PAGES
import Home from '../pages/Home';
import Actives from '../pages/Home';
import Navigator from '../components/Navigator';
import Header from '../components/Header';

const MyRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actives" element={<Actives />} />
      </Routes>

      <Navigator />
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default MyRoutes;
