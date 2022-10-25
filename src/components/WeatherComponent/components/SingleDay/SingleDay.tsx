import { IConditionDetails } from 'models/WeatherModel';

import { getShortDayName } from 'utils/utils';
import { SingleIcon } from '../SingleIcon';

import * as S from './styled';

interface IProps {
  singleDay?: IConditionDetails;
}

export const SingleDay = ({ singleDay }: IProps) => {
  return (
    <S.Wrapper>
      <S.Day>{getShortDayName(singleDay?.datetime ?? '')}</S.Day>
      <SingleIcon iconName={singleDay?.icon} />
      <S.Temperature>
        {singleDay?.temp}
        <sup>o</sup>
      </S.Temperature>
    </S.Wrapper>
  );
};
