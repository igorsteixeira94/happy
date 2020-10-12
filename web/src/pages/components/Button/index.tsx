import React from 'react';

import { FiArrowRight } from 'react-icons/fi';
import { Container } from './styles';

const Button: React.FC = () => {
  return (
    <Container>
      <FiArrowRight size={26} />
    </Container>
  );
};

export default Button;
