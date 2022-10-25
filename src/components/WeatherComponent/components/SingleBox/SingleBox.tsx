import { useGetWeatherQuery } from 'services/getWeather';

import { Loader } from 'components/common/Loader';
import { FollowingDays } from '../FollowingDays';
import { Header } from '../Header';

import * as S from './styled';

interface IProps {
  location: string;
}

export const SingleBox = ({ location }: IProps) => {
  const { data, isLoading } = useGetWeatherQuery({ location });
  return (
    <S.Wrapper>
      <Header currentConditions={data?.currentConditions} isLoading={isLoading} />
      <FollowingDays days={data?.days.slice(1, 5)} isLoading={isLoading} />
    </S.Wrapper>
  );
};
