import { FriendCard, Status, Avatar, Name } from './index.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <FriendCard>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendCard>
  );
};
