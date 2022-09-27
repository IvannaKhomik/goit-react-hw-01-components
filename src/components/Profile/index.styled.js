import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 250px;
  height: auto;
  color: #283747;
  border: 1px solid #bdc3c7;
  border-radius: 8px;
  padding-top: 4px;
  margin-right: 8px;
  overflow: hidden;
`;
export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Photo = styled.img`
  display: block;
  width: 150px;
  margin-bottom: 12px;
`;
export const Name = styled.p`
  margin-bottom: 4px;
  font-weight: bold;
`;
export const Tag = styled.p`
  margin-bottom: 4px;
  color: #5d6d7e;
`;
export const Location = styled.p`
  margin-bottom: 12px;
  color: #5d6d7e;
`;
export const StatsList = styled.ul`
  display: flex;
  list-style-type: none;
  border-top: 2px solid #bdc3c7;
`;
export const StatsItem = styled.li`
  width: calc(100% / 3);
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ecf0f1;

  &:not(:last-child) {
    border-right: 2px solid #bdc3c7;
  }
`;
export const Label = styled.p`
  margin-bottom: 4px;
  font-size: 14px;
`;
export const Quantity = styled.p`
  font-weight: bold;
`;
