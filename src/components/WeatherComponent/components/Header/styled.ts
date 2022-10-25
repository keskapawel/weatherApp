import styled from 'styled-components';
import { palette } from 'styles/palette';
import { fontSize, fontWeight } from 'styles/font';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 0 30px;
  min-height: 200px;
  box-sizing: border-box;
`;

export const Header = styled.p`
  color: ${palette.baseColor};
  font-size: ${fontSize[22]};
  margin: 0;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
export const Condition = styled.div``;

export const Temperature = styled.p`
  color: ${palette.dark};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize[36]};
  padding: 0;
  margin: 0;
`;

export const Status = styled.p`
  padding: 0;
  margin: 0;
  color: ${palette.baseColor};
  font-size: ${fontSize[22]};
`;
