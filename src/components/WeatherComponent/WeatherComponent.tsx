import { Box, Grid } from '@mui/material';

import { Tabs } from 'components/common/Tabs';
import { SingleBox } from './components/SingleBox';
import { ECity } from './constants';

import * as S from './styled';

export const WeatherComponent = () => {
  return (
    <S.Wrapper>
      <Box padding='24px'>
        <Tabs
          tabs={[{ label: ECity.Warsaw }, { label: ECity.Berlin }, { label: ECity.Prague }]}
          orientation={'horizontal'}
        >
          {/* TAB 1 */}
          <Grid spacing={1} container>
            <SingleBox location={ECity.Warsaw} />
          </Grid>

          {/* TAB 2 */}
          <Grid spacing={1} container>
            <SingleBox location={ECity.Berlin} />
          </Grid>

          {/* TAB 3*/}
          <Grid spacing={1} container>
            <SingleBox location={ECity.Prague} />
          </Grid>
        </Tabs>
      </Box>
    </S.Wrapper>
  );
};
