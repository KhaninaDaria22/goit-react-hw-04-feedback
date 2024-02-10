import styled from '@emotion/styled';
import { theme } from 'constans/theme';

export const FeedbackList = styled.ul` 
    display: flex;
    gap: 12px;
    align-items: center;
`;

export const Button = styled.button`
    padding: 8px 16px;
  min-width: 100px;
  font-size: 16px;
  font-weight: 500;
  background-color: ${theme.colors.gray};
  color: ${theme.colors.white};

  &:hover {
    background-color: ${theme.colors.blue};
    transform: scale(1.05);
`