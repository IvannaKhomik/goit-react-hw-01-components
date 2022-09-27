import PropTypes from 'prop-types';

import { Trow, TransactionInfo } from './index.styled';

export const Transaction = ({ info: { type, amount, currency } }) => {
  return (
    <Trow>
      <TransactionInfo>{type}</TransactionInfo>
      <TransactionInfo>{amount}</TransactionInfo>
      <TransactionInfo>{currency}</TransactionInfo>
    </Trow>
  );
};

Transaction.propTypes = {
  info: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
