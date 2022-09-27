import PropTypes from 'prop-types';
import { StatisticItem } from '../StatisticItem';
import { StatsSection, Title, StatsList } from './index.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsSection>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(item => (
          <StatisticItem key={item.id} stat={item} />
        ))}
      </StatsList>
    </StatsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
