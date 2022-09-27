import styled from 'styled-components';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const StatsCard = styled.li`
  width: 80px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 4px;
  color: #ffffff;
  background-color: ${getRandomHexColor};
`;

export const StatsLabel = styled.span`
  font-size: 14px;
  font-weight: 700;
`;
export const StatsPercentage = styled.span`
  font-size: 18px;
`;
