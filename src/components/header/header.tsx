import styled from '@emotion/styled';
import React from 'react';
import UserSearchInput from '../UserSearch/UserSearchInput';

interface IProps {
  showUserSearch: boolean;
  showUserInfo: boolean;
  username?: string;
  avatar?: string;
}

const Container = styled.div`
  width: 100%;
 .user-input {
    border-radius: 5px;
    min-height: 20vh;
    width: 100%;
    display: ${(props: IProps) => props.showUserSearch ? 'flex' : 'none'};
    justify-content: center;
    align-items: flex-end;
  }

  .spacer {
    width: 100%;
    min-height: 30vh;
    padding: 20px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    }

  .layer {
    background-image: url('/bg.svg');
  }

  .user-info {
    display: ${(props: IProps) => props.showUserInfo ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    width: 150px;

    h2{
    margin: 0;
    color: #FFF;
  }

  h3 {
    margin-top: 10px;
    margin-bottom:20px ;
    color: #FFF;
    text-transform: uppercase;
  }

  img {
    width: 100px;
    border-radius: 50%;
  }
  }
`

const Header = ({ showUserInfo, showUserSearch, username, avatar }: IProps) => {
  return <Container showUserInfo={showUserInfo} showUserSearch={showUserSearch}>
    <div className='spacer layer'>
      <div className='user-info'>
        <img src={avatar} alt={username} />
        <h3>{username}</h3>
      </div>
      <div className='user-input'>
        <UserSearchInput />
      </div>
    </div>
  </Container>
}

export default Header;