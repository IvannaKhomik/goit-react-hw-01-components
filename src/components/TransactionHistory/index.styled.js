import styled from 'styled-components';

export const TransactionWrap = styled.table`
  border: 1px solid #a569bd;
  border-radius: 8px;
  box-shadow: 4px 4px 4px #a569bd;
  table-layout: fixed;
  border-collapse: collapse;
  text-align: center;
`;
export const Thead = styled.thead`
  background-color: #a569bd;
`;
export const Trow = styled.tr``;
export const Title = styled.th`
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 500;
  padding: 8px;
  width: 200px;
  &: not(: last-child) {
    border-right: 1px solid #ecf0f1;
  }
`;
export const Tbody = styled.tbody`
  color: #5d6d7e;
`;
