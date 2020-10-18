import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Container, Logo, Content } from './styles';

const SideBar: React.FC = () => {
  const { goBack } = useHistory();
  return (
    <Container>
      <Logo />
      <Content>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#fff" />
        </button>
      </Content>
    </Container>
  );
};

export default SideBar;
