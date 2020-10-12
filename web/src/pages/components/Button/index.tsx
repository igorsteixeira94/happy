import React from 'react';

import { Container } from './styles';

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }: ButtonProps) => {
  return <Container>{children}</Container>;
};

export default Button;
