import styled, { css } from 'styled-components';
import { Box, Tab } from '@mui/material';
import { TabList, TabListProps, TabPanel } from '@mui/lab';

import { palette } from 'styles/palette';
import { fontSize, fontWeight } from 'styles/font';

type StyledProps = {
  $orientation: TabListProps['orientation'];
};

const TAB_PADDING = '8px';
const TAB_MARGIN = '20px';

export const TabsWrapper = styled(Box)<StyledProps>`
  ${({ $orientation }) =>
    $orientation === 'vertical' &&
    css`
      display: flex;
    `}
`;

export const StyledTabList = styled(TabList)<StyledProps>`
  min-width: min-content;
  z-index: 1;
  > div > div {
    justify-content: center;
    align-items: center;
  }
`;

export const StyledTab = styled(Tab)<StyledProps>`
  padding: ${TAB_PADDING};
  align-items: flex-start;
  border-radius: 8px;
  min-height: 0px;

  transition: 0.2s color ease-in-out;

  color: ${palette.baseColor};
  font-size: ${fontSize[22]} !important;

  ${({ $orientation }) =>
    $orientation === 'vertical'
      ? css`
          &:not(:last-of-type) {
            margin-bottom: ${TAB_MARGIN};
          }
        `
      : css`
          &:not(:last-of-type) {
            margin-right: ${TAB_MARGIN};
          }
        `}

  &.Mui-selected {
    background: none;
    color: ${palette.selectedBlue} !important;
    font-weight: ${fontWeight.semiBold};
  }
`;

export const StyledTabPanel = styled(TabPanel)<StyledProps>`
  width: 100%;

  ${({ $orientation }) =>
    $orientation === 'vertical'
      ? css`
          padding-top: ${TAB_PADDING};
        `
      : css`
          padding: 0;
        `};
`;
