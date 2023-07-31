/*
 * File: /app/mapper/git.mapper.ts
 * Project: portfolio
 * Created: Thursday, 8th December 2022
 * Author: Denpex
 * -----
 * Copyright 2022, ©Mehdi Rashadatjou
 * -----
 */

import type {
  ApiGitRepo,
  ApiGitUser,
  GitUser,
  GitRepo,
  ApiGitRepoOwner,
  GitRepoOwner,
  ApiGitRepoLicense,
  GitRepoLicense,
} from "~/typings/git";

/// USER
export const mapGitUser = (user: ApiGitUser): GitUser => ({
  avatarUrl: user["avatar_url"],
  bio: user["bio"],
  blogURL: user["blog"],
  company: user["company"],
  createdDate: user["created_at"],
  email: user["email"],
  eventsURL: user["events_url"],
  followersURL: user["followers_url"],
  followersCount: user["followers"],
  followingURL: user["following_url"],
  followingCount: user["following"],
  gistsURL: user["gists_url"],
  gravatarID: user["gravatar_id"],
  hireable: user["hireable"],
  htmlURL: user["html_url"],
  id: user["id"],
  location: user["location"],
  login: user["login"],
  name: user["name"],
  nodeID: user["node_id"],
  organizationsURL: user["organizations_url"],
  publicGistCount: user["public_gists"],
  publicRepoCount: user["public_repos"],
  receivedEventsURL: user["received_events_url"],
  reposURL: user["repos_url"],
  siteAdmin: user["site_admin"],
  starredURL: user["starred_url"],
  subscriptionsURL: user["subscriptions_url"],
  twitterUsername: user["twitter_username"],
  type: user["type"],
  updatedDate: user["updated_at"],
  url: user["url"],
});

/// REPO
const mapRepoOwner = (owner: ApiGitRepoOwner | null): GitRepoOwner => ({
  name: owner?.["name"] ?? null,
  email: owner?.["email"] ?? null,
  login: owner?.["login"] ?? "",
  id: owner?.["id"] ?? "",
  nodeID: owner?.["node_id"] ?? "",
  avatarURL: owner?.["avatar_url"] ?? "",
  gravatarID: owner?.["gravatar_id"] ?? null,
  url: owner?.["url"] ?? "",
  htmlURL: owner?.["html_url"] ?? "",
  followersURL: owner?.["followers_url"] ?? "",
  followingURL: owner?.["following_url"] ?? "",
  gistsURL: owner?.["gists_url"] ?? "",
  starredURL: owner?.["starred_url"] ?? "",
  subscriptionsURL: owner?.["subscriptions_url"] ?? "",
  organizationsURL: owner?.["organizations_url"] ?? "",
  reposURL: owner?.["repos_url"] ?? "",
  eventsURL: owner?.["events_url"] ?? "",
  receivedEventsURL: owner?.["received_events_url"] ?? "",
  type: owner?.["type"] ?? "",
  siteAdmin: owner?.["site_admin"] ?? false,
  starredDate: owner?.["starred_at"] ?? "",
});

const mapRepoLicense = (license: ApiGitRepoLicense | null): GitRepoLicense => ({
  key: license?.["key"] ?? "",
  name: license?.["name"] ?? "",
  url: license?.["url"] ?? null,
  spdxID: license?.["spdx_id"] ?? null,
  nodeID: license?.["node_id"] ?? "",
  htmlURL: license?.["html_url"] ?? "",
});

export const mapRepoList = (repoList: ApiGitRepo[]): GitRepo[] =>
  repoList.map((repo) => ({
    info: {
      id: repo["id"],
      nodeID: repo["node_id"],
      fullName: repo["full_name"],
      name: repo["name"],
      description: repo["description"],
      homepage: repo["homepage"],
      size: repo["size"],
      language: repo["language"],
      stargazersCount: repo["stargazers_count"],
      watchersCount: repo["watchers_count"],
      forksCount: repo["forks_count"],
      openIssuesCount: repo["open_issues_count"],
      topics: repo["topics"],
      visibility: repo["visibility"],
      watchers: repo["watchers"],
      defaultBranch: repo["default_branch"],
    },
    flags: {
      isPrivate: repo["private"],
      isFork: repo["fork"],
      isArchived: repo["archived"],
      isDisabled: repo["disabled"],
      isTemplate: repo["is_template"],
      hasIssues: repo["has_issues"],
      hasProjects: repo["has_projects"],
      hasDownloads: repo["has_downloads"],
      hasWiki: repo["has_wiki"],
      hasPages: repo["has_pages"],
      hasDiscussions: repo["has_discussions"],
      doesAllowForking: repo["allow_forking"],
      doesRequireWebCommitSignOff: repo["web_commit_signoff_required"],
    },
    urls: {
      url: repo["url"],
      htmlURL: repo["html_url"],
      forksURL: repo["forks_url"],
      keysURL: repo["keys_url"],
      mirrorURL: repo["mirror_url"],
      collaboratorsURL: repo["collaborators_url"],
      teamsURL: repo["teams_url"],
      hooksURL: repo["hooks_url"],
      issueEventsURL: repo["issue_events_url"],
      eventsURL: repo["events_url"],
      assigneesURL: repo["assignees_url"],
      branchesURL: repo["branches_url"],
      tagsURL: repo["tags_url"],
      blobsURL: repo["blobs_url"],
      gitTagsURL: repo["git_tags_url"],
      gitRefsURL: repo["git_refs_url"],
      treesURL: repo["trees_url"],
      statusesURL: repo["statuses_url"],
      languagesURL: repo["languages_url"],
      stargazersURL: repo["stargazers_url"],
      contributorsURL: repo["contributors_url"],
      subscribersURL: repo["subscribers_url"],
      subscriptionURL: repo["subscription_url"],
      commitsURL: repo["commits_url"],
      gitCommitsURL: repo["git_commits_url"],
      commentsURL: repo["comments_url"],
      issueCommentURL: repo["issue_comment_url"],
      contentsURL: repo["contents_url"],
      compareURL: repo["compare_url"],
      mergesURL: repo["merges_url"],
      archiveURL: repo["archive_url"],
      downloadsURL: repo["downloads_url"],
      issuesURL: repo["issues_url"],
      pullsURL: repo["pulls_url"],
      milestonesURL: repo["milestones_url"],
      notificationsURL: repo["notifications_url"],
      labelsURL: repo["labels_url"],
      releasesURL: repo["releases_url"],
      deploymentsURL: repo["deployments_url"],
      gitURL: repo["git_url"],
      sshURL: repo["ssh_url"],
      cloneURL: repo["clone_url"],
      svnURL: repo["svn_url"],
    },
    dates: {
      createdDate: repo["created_at"],
      updatedDate: repo["updated_at"],
      pushedDate: repo["pushed_at"],
    },
    license: mapRepoLicense(repo["license"]),
    owner: mapRepoOwner(repo["owner"]),
    permissions: repo["permissions"],
  }));
