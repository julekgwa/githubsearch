import { createContext } from 'react';
import { GitHubActivityData, GitHubUserSearchData } from "../../services/github/types";

interface IGitHubDataContext {
  searchData?: GitHubUserSearchData,
  fetchUserSearchData: (username: string, page?: number) => void,
  isLoading: boolean,
  activityData?: GitHubActivityData
  fetchUserActivityData: (username: string) => void,
  setSearchData: (data: GitHubUserSearchData) => void
}

export type GitHubDataContext = IGitHubDataContext;

export const gitHubDataContext = createContext<GitHubDataContext>({} as GitHubDataContext);