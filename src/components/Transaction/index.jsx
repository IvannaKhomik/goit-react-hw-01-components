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
