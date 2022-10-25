import { IConditionDetails } from 'models/WeatherModel';

import { Loader } from 'components/common/Loader';
import { SingleDay } from '../SingleDay';

import * as S from './styled';

interface IProps {
  days?: IConditionDetails[];
  isLoading: boolean;
}

export const FollowingDays = ({ days, isLoading }: IProps) => {
  return (
    <S.Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        days?.map((singleDay) => (
          <SingleDay key={`singleDay-key-${singleDay.datetimeEpoch}`} singleDay={singleDay} />
        ))
      )}
    </S.Wrapper>
  );
};
