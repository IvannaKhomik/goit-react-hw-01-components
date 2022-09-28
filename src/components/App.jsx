import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';
import user from '../data/user.json';
import stats from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Container } from './index.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      {/* <Statistics stats={stats} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
