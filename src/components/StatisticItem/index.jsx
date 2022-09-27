import { StatsCard, StatsLabel, StatsPercentage } from './index.styled';

export const StatisticItem = ({ stats: { label, percentage } }) => {
  return (
    <StatsCard>
      <StatsLabel>{label}</StatsLabel>
      <StatsPercentage>{percentage}%</StatsPercentage>
    </StatsCard>
  );
};
