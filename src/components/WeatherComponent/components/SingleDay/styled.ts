import styled from 'styled-components';
import { palette } from 'styles/palette';
import { fontWeight } from 'styles/font';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 22px 30px;
  &:not(:last-child) {
    border-right: 4px solid ${palette.white};
  }
`;

export const Day = styled.p`
  padding: 0;
  margin: 0;
  color: ${palette.baseColor};
`;

export const Temperature = styled.p`
  padding: 0;
  margin: 0;
  color: ${palette.dark};
  font-weight: ${fontWeight.semiBold};
`;
