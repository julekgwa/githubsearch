import styled from '@emotion/styled';
import { GitHubActivityData } from 'src/services/github/types';
import ActivityListItem from './ActivityListItem';

const Container = styled.div`
  display: flex;
  justify-content: center;

  .flex-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 90%;
  }
`

interface IProps {
  activityData: GitHubActivityData | undefined;
}

const ActivityList = ({ activityData }: IProps) => {
  return (
    <Container>
      <div className='flex-container'>
      {activityData?.length
        ? activityData.map(activity => <ActivityListItem key={activity.id} activity={activity} />)
        : <p data-testid='no-data'>No data</p>}
        </div>
    </Container>
  );
};

export default ActivityList;