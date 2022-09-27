import {
  ProfileCard,
  UserDescription,
  Photo,
  Name,
  Tag,
  Location,
  StatsList,
  StatsItem,
  Label,
  Quantity,
} from './index.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <ProfileCard>
      <UserDescription>
        <Photo src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>&#64;{tag}</Tag>
        <Location>{location}</Location>
      </UserDescription>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
};
