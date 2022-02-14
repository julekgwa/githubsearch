import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { GitHubUserSearchData } from 'src/services/github/types';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid grey;
  width: 100%;
  margin-top: 5px;

.user-name-container {
  display: flex;
  justify-content: center;
  flex-direction: column;

  p {
    margin: 0;
    text-transform: uppercase;
    word-wrap: break-word;
  }

  a {
    text-decoration: none;
    font-size: 14px;
    color: grey;
  }

  a:hover {
    color: #00BFFF;
  }
}

.image-container {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
}

@media only screen and (min-width : 480px) {
  width: 210px;
  border: 1px solid grey;
  flex-direction: column;
  min-height: 250px;
  border-radius: 5px;
  margin: 5px 5px;

  .user-name-container {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 5px;
  }
}

@media only screen and (min-width : 1200px) {
  width: 210px;
  border: 1px solid grey;
  flex-direction: column;
  min-height: 250px;
  border-radius: 5px;
  margin: 5px 5px;

  .user-name-container {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 5px;
  }
}

`

interface IProps {
  user: GitHubUserSearchData['items'][0];
}

const UsersListItem = ({ user }: IProps) => {

  return (
    <Container>
      <div className='image-container'>
        <img src={user.avatar_url} alt={user.login}/>
      </div>
      <div className='user-name-container'>
        <p>{user.login}</p>
        <Link to={{ pathname: `/user-activity/${user.login}`, state: { username: user.login, avatar: user.avatar_url }}}>View activity</Link>
      </div>
    </Container>
  )
};

export default UsersListItem;