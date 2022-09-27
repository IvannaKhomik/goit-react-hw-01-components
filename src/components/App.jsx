import { Profile } from './Profile';
import { Statistics } from './Statistics';
import user from '../data/user.json';
import stats from '../data/data.json';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'flex-start',
        // alignItems: 'center',
        // fontSize: 40,
        // color: '#010101',
      }}
    >
      <Profile user={user} />
      <Statistics title="Upload stats" stats={stats} />
      {/* <Statistics stats={stats} /> */}
    </div>
  );
};
