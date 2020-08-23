import React from 'react';
import Feed from '../Feed/index'
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followwage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Brayan Quirino</h1>
        <h2>@brayqui</h2>

        <p>
          Developer at <a href="www.rocketseat.com.br">@Rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Ubatuba, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 04 de Agosto de 1999
          </li>
        </ul>
        <Followwage>
          <span>
            Seguindo <strong>101</strong>
          </span>
          <span>
            <strong>432 </strong>Seguidores
          </span>
        </Followwage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
