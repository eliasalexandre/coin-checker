import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

const Navigator: React.FC = () => {
  const navigate = useNavigate();

  function handleNavigateX() {
    navigate('/');
  }
  function handleNavigateY() {
    navigate('/actives');
  }

  return (
    <Container>
      <button
        className="currentActive"
        id="home"
        type="button"
        onClick={handleNavigateX}
      >
        Home navigator
      </button>

      <div className="circle"></div>

      <button id="actives" type="button" onClick={handleNavigateY}>
        Profile navigator
      </button>
    </Container>
  );
};

export default Navigator;
