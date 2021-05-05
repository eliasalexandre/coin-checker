import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../components/Header';
import Navigator from '../components/Navigator';
import Actives from '../pages/Actives';
import Home from '../pages/Home';
import { GlobalStyle } from '../styles/GlobalStyle';

// PAGES

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
