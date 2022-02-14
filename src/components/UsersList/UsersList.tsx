import styled from '@emotion/styled';
import { GitHubUserSearchData } from 'src/services/github/types';
import UsersListItem from './UsersListItem';

const Container = styled.div`
  display: flex;
  justify-content: center;

  .flex-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 80%;
  }

  /* @media only screen and (min-width : 480px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  flex-wrap: wrap;
}

@media only screen and (min-width : 1200px) {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
} */
`

interface IProps {
  searchData: GitHubUserSearchData | undefined;
}

const UsersList = ({ searchData }: IProps) => {

  return (
    <Container>
      <div className='flex-container'>
      {!!searchData?.items.length
        ? searchData?.items.map(user => <UsersListItem key={user.id} user={user} />)
        : <p>No data</p>}
        </div>
    </Container>
  )
};

export default UsersList;