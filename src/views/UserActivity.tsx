import styled from '@emotion/styled';
import { useCallback, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ActivityList from 'src/components/ActivityList/ActivityList';
import Spinner from 'src/components/core/Spinner';
import Header from 'src/components/header/header';
import { useGitHubData } from 'src/hooks/githubData/useGitHubData';

const Container = styled.div`
  width: 100%;
  background-color: #FFF;
  border-radius: 5px;
  padding-top: 10px;

  @media only screen and (min-width : 480px) {
    display: flex;
    flex-direction: row;
  flex-wrap: wrap;
}

@media only screen and (min-width : 1200px) {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
`

interface ILocationState {
  avatar: string;
}

const UserActivityView = () => {

  const { username } = useParams<{ username: string }>();
  const location = useLocation();
  const {avatar} = location.state as ILocationState;
  const { activityData, fetchUserActivityData, isLoading } = useGitHubData()

  const fetchData = useCallback(() => {
    fetchUserActivityData(username);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return <>
    <Header username={username} avatar={avatar} showUserInfo={true} showUserSearch={false} />
    <Container>
      {isLoading

        ? <Spinner />
        : <ActivityList activityData={activityData} />
      }
    </Container>
  </>
}

export default UserActivityView;