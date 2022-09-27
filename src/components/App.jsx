import { Profile } from './Profile';
import { Statistics } from './Statistics';
import user from '../data/user.json';
import stats from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
      }}
    >
      <Profile user={user} />
      <Statistics title="Upload stats" stats={stats} />
      {/* <Statistics stats={stats} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
