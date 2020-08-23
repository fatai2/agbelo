/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        userId
        createdAt
        updatedAt
        owner
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($userId: ID!) {
    getUser(userId: $userId) {
      userId
      createdAt
      updatedAt
      owner
      _version
      _deleted
      _lastChangedAt
      posts {
        nextToken
        startedAt
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $userId: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      userId: $userId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userId
        createdAt
        updatedAt
        owner
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        authorId
        postContent
        createdAt
        owner
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      authorId
      author {
        userId
        createdAt
        updatedAt
        owner
        _version
        _deleted
        _lastChangedAt
      }
      postContent
      createdAt
      owner
      _version
      _deleted
      _lastChangedAt
      updatedAt
      translations {
        nextToken
        startedAt
      }
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        authorId
        postContent
        createdAt
        owner
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const listTranslations = /* GraphQL */ `
  query ListTranslations(
    $filter: ModelTranslationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTranslations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        authorId
        postId
        translationIvie
        translationSound
        exampleIvie
        exampleEnglish
        voteCount
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTranslation = /* GraphQL */ `
  query GetTranslation($id: ID!) {
    getTranslation(id: $id) {
      id
      authorId
      postId
      translationIvie
      translationSound
      exampleIvie
      exampleEnglish
      author {
        userId
        createdAt
        updatedAt
        owner
        _version
        _deleted
        _lastChangedAt
      }
      voteCount
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      post {
        id
        authorId
        postContent
        createdAt
        owner
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      votes {
        nextToken
        startedAt
      }
    }
  }
`;
export const syncTranslations = /* GraphQL */ `
  query SyncTranslations(
    $filter: ModelTranslationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTranslations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        authorId
        postId
        translationIvie
        translationSound
        exampleIvie
        exampleEnglish
        voteCount
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTranslationVote = /* GraphQL */ `
  query GetTranslationVote($id: ID!) {
    getTranslationVote(id: $id) {
      id
      userId
      translationId
      createdAt
      vote
      owner
      _version
      _deleted
      _lastChangedAt
      updatedAt
      translation {
        id
        authorId
        postId
        translationIvie
        translationSound
        exampleIvie
        exampleEnglish
        voteCount
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const listTranslationVotes = /* GraphQL */ `
  query ListTranslationVotes(
    $filter: ModelTranslationVoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTranslationVotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        translationId
        createdAt
        vote
        owner
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTranslationVotes = /* GraphQL */ `
  query SyncTranslationVotes(
    $filter: ModelTranslationVoteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTranslationVotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userId
        translationId
        createdAt
        vote
        owner
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
