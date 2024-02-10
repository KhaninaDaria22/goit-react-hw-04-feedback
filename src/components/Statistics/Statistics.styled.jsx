import styled from '@emotion/styled';
// import { theme } from 'constants';

export const StatisticsList = styled.ul`
    display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const StatisticItem = styled.li`
    display: flex;
    justify-content: space-between;
    max-width: 328px;
    padding-bottom: 5px;
    border-bottom: 1px solid black;
`;

export const StatisticText = styled.span`
    font-size: #DCDCDC;
    margin-right: 5px;
`;
