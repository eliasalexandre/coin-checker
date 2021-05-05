import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
      <Link className="currentActive" id="home" type="button" to="/">
        Home navigator
      </Link>

      <div className="circle"></div>

      <Link id="actives" type="button" to="/actives">
        Profile navigator
      </Link>
    </Container>
  );
};

export default Navigator;
