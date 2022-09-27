import styled from 'styled-components';

const changeStatusColor = ({ isOnline }) => {
  return `${isOnline ? 'green' : 'red'}`;
};

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  box-shadow: 4px 4px 4px #95a5a6;
  border: 1px solid transparent;
  bodrer-radius: 8px;
  margin-bottom: 4px;
  padding: 8px;
`;
export const Status = styled.span`
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 12px;
  background-color: ${changeStatusColor};
`;
export const Avatar = styled.img`
  margin-right: 12px;
`;
export const Name = styled.p`
  font-weight: 500;
  color: #2e4053;
`;
