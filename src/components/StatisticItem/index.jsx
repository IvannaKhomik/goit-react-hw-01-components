import PropTypes from 'prop-types';
import { StatsCard, StatsLabel, StatsPercentage } from './index.styled';

export const StatisticItem = ({ stat: { label, percentage } }) => {
  return (
    <StatsCard>
      <StatsLabel>{label}</StatsLabel>
      <StatsPercentage>{percentage}%</StatsPercentage>
    </StatsCard>
  );
};

StatisticItem.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
