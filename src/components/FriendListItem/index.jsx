import PropTypes from 'prop-types';
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

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
