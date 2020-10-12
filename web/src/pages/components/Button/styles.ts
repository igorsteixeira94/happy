import styled from 'styled-components';

export const Container = styled.a`
  width: 8rem;
  height: 8rem;
  border-radius: 3rem;
  background: var(--color-btn-home);
  transition: background 0.6s;

  &:hover {
    background: var(--color-btn-home-hover);
  }
`;
