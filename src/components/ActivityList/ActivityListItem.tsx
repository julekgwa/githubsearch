import styled from '@emotion/styled';
import { useState } from 'react';
import { GitHubActivity } from 'src/services/github/types';

const Container = styled.div`
 width: 100%;
.header {
  background-color: #00BFFF;
  padding: 10px;
  color: #FFF;
  text-transform: uppercase;
  display: flex;
  flex: 1;
}

.content {
  background: #FFF;
}

@media only screen and (min-width : 480px) {
  flex-direction: column;
  border-radius: 5px;
  margin: 5px 5px;
}

@media only screen and (min-width : 1200px) {
  width: 300px;
  flex-direction: column;
  border-radius: 5px;
  margin: 5px 5px;

  .user-name-container {
    align-items: center;
    margin-top: 5px;
  }
}
`

interface IProps {
  activity: GitHubActivity;
}
const ActivityListItem = ({  activity }: IProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <div onClick={() => setOpen(!open)} className="header">
        {`${activity.type}`}
      </div>
      {open ? <div className="content">
        <p>by: {activity.actor.login}</p>
        <p>repo: <a href={activity.repo.url}>{activity.repo.name}</a></p>
      </div> : null}
    </Container>
  );
};

export default ActivityListItem;