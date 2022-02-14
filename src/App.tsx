import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import GitHubDataProvider from './hooks/githubData/GithubDataProvider';
import UserActivityView from './views/UserActivity';
import UserSearchView from './views/UserSearch';

function App() {
  return (
    <div className="App">
      <GitHubDataProvider>
        <Router>
          <Switch>
            <Route path='/' exact>
              <UserSearchView />
            </Route>
            <Route path='/user-activity/:username'>
              <UserActivityView />
            </Route>
          </Switch>
        </Router>
      </GitHubDataProvider>
    </div>
  );
}

export default App;
