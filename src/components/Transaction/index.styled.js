import styled from 'styled-components';

export const Trow = styled.tr`
  &: nth - child(odd) {
    background-color: #f4f6f7;
  }
  &: nth-child(even) {
    background-color: #bb8fce;
    color: #ffffff;
  } ;
`;

export const TransactionInfo = styled.td`
  padding: 12px;
  &: not(: last-child) {
    border-right: 1px solid #ecf0f1;
  }
`;
