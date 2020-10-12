import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.a`
  width: 8rem;
  height: 8rem;

  border-radius: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${darken(0.3, '#FFD666')};
  }

  background: var(--color-btn-home);
  transition: background 0.2s;

  &:hover {
    background: var(--color-btn-home-hover);

    svg {
      color: ${darken(0.5, '#96FEFF')};
    }
  }

  //BreakPoint
  @media (max-width: 530px) {
    width: 80%;
  }
`;
