import { GitHubActivityData, GitHubUserSearchData } from "./types";

import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

export default class GitHubService {
    static readonly GIT_API_URL = 'https://api.github.com/';

    public static async getUserActivity(username: string): Promise<GitHubActivityData> {
        try {
          const response= await octokit.rest.activity.listReceivedPublicEventsForUser({
            username: username,
          });

          return response?.data

        } catch (error: any) {
            console.log(error.message);
            throw new Error(`User ${error.message}`);
        }
    }

    public static async searchUsers(username: string, page?: number): Promise<GitHubUserSearchData> {
      try {
        const response = await octokit.request('GET /search/users', {
            q: username,
            page: page
          })

        return response?.data;

      } catch (error: any) {
        console.log(error.message);
        throw new Error(error.message);
      }
    }
}