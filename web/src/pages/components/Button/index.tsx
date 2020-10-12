import React from 'react';

import { Container } from './styles';

interface ButtonProps {
  children: React.ReactNode;
  page: string;
}

const Button: React.FC<ButtonProps> = ({ children, page }: ButtonProps) => {
  return <Container to={page}>{children}</Container>;
};

export default Button;
