import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIconBirthday,
  FollowAge,
  EditProfileButton,
} from './styles';

const ProfilePage: React.FC = () => (
  <Container>
    <Banner>
      <Avatar />
    </Banner>

    <ProfileData>
      <EditProfileButton outlined>Edit Profile</EditProfileButton>

      <h1>Maganez</h1>
      <h2>@maganez_</h2>

      <p>
        Systems Development, with focusing on the FrontEnd -
        <a href="https://github.com/maganezf">@GitHub</a>
      </p>

      <ul>
        <li>
          <LocationIcon />
          Brazil
        </li>
        <li>
          <CakeIconBirthday />
          Born on Earth ^^
        </li>
      </ul>

      <FollowAge>
        <span>
          <strong>100 </strong>
          Following
        </span>

        <span>
          <strong>100 </strong>
          Followers
        </span>
      </FollowAge>
    </ProfileData>

    <Feed />
  </Container>
);

export default ProfilePage;
