import { StatisticItem } from '../StatisticItem';
import { StatsSection, Title, StatsList } from './index.styled';

export const Statistics = ({ title, stats }) => {
  console.log(stats);
  return (
    <StatsSection>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(item => (
          <StatisticItem key={item.id} stats={item} />
        ))}
      </StatsList>
    </StatsSection>
  );
};
