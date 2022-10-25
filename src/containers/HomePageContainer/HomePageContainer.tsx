import { WeatherComponent } from 'components/WeatherComponent';

import * as S from './styled';

export const HomePageContainer = () => {
  return (
    <S.Wrapper>
      <WeatherComponent />
    </S.Wrapper>
  );
};
