import PropTypes from 'prop-types';
import { Transaction } from '../Transaction';
import { TransactionWrap, Thead, Trow, Title, Tbody } from './index.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionWrap>
      <Thead>
        <Trow>
          <Title>Type</Title>
          <Title>Amount</Title>
          <Title>Currency</Title>
        </Trow>
      </Thead>

      <Tbody>
        {items.map(item => (
          <Transaction key={item.id} info={item} />
        ))}
      </Tbody>
    </TransactionWrap>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
