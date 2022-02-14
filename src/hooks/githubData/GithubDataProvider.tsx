import React, { useState } from 'react';
import GitHubService from '../../services/github/Github';
import { GitHubActivityData, GitHubUserSearchData } from '../../services/github/types';
import { useOfflineStorage } from '../useOfflineStorage';
import { gitHubDataContext } from './GitHubDataContext';


const GitHubDataProvider = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {

  const [searchData, setSearchData] = useState<GitHubUserSearchData | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [activityData, setActivityData] = useState<GitHubActivityData | undefined>(undefined);
  const {saveData} = useOfflineStorage()

  const fetchUserSearchData = async (username: string, page?: number) => {
    setIsLoading(true)
    const data = await GitHubService.searchUsers(username, page)
    setIsLoading(false)
    setSearchData(data)
    saveData('searchData', data)
  }

  const fetchUserActivityData = async (username: string) => {
    setIsLoading(true)
    const data = await GitHubService.getUserActivity(username)
    setIsLoading(false)
    setActivityData(data)
    saveData('activityData', data)
  }

  return (
    <gitHubDataContext.Provider value={{ searchData, fetchUserSearchData, isLoading, activityData, fetchUserActivityData, setSearchData }}>
      {children}
    </gitHubDataContext.Provider>
  )
}

export default GitHubDataProvider;
