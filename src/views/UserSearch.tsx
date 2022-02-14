import { useCallback, useEffect } from 'react';
import Spinner from 'src/components/core/Spinner';
import Header from 'src/components/header/header';
import UsersList from 'src/components/UsersList/UsersList';
import { useGitHubData } from 'src/hooks/githubData/useGitHubData';
import { useOfflineStorage } from 'src/hooks/useOfflineStorage';

const UserSearchView = () => {
  const { searchData, isLoading, setSearchData } = useGitHubData();
  const {loadData} = useOfflineStorage();

  const fetchData = useCallback(() => {
    const data = loadData('searchData');
    setSearchData(JSON.parse(data));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <>
    <Header showUserInfo={false} showUserSearch={true} />
    {isLoading

      ? <Spinner />
      : <UsersList searchData={searchData} />
    }
  </>
};

export default UserSearchView;