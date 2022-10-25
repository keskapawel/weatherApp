import { Loader } from 'components/common/Loader';
import { IConditionDetails } from 'models/WeatherModel';

import { SingleIcon } from '../SingleIcon';

import * as S from './styled';

interface IProps {
  currentConditions?: IConditionDetails;
  isLoading: boolean;
}

export const Header = ({ currentConditions, isLoading }: IProps) => {
  return (
    <S.Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <S.Header>Today</S.Header>
          <S.Details>
            <SingleIcon iconName={currentConditions?.icon} height={120} />
            <S.Condition>
              <S.Temperature>
                {currentConditions?.temp}
                <sup>o</sup>
              </S.Temperature>
              <S.Status>{currentConditions?.conditions}</S.Status>
            </S.Condition>
          </S.Details>
        </>
      )}
    </S.Wrapper>
  );
};
