/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createTranslation = /* GraphQL */ `
  mutation CreateTranslation(
    $input: CreateTranslationInput!
    $condition: ModelTranslationConditionInput
  ) {
    createTranslation(input: $input, condition: $condition) {
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
export const updateTranslation = /* GraphQL */ `
  mutation UpdateTranslation(
    $input: UpdateTranslationInput!
    $condition: ModelTranslationConditionInput
  ) {
    updateTranslation(input: $input, condition: $condition) {
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
export const deleteTranslation = /* GraphQL */ `
  mutation DeleteTranslation(
    $input: DeleteTranslationInput!
    $condition: ModelTranslationConditionInput
  ) {
    deleteTranslation(input: $input, condition: $condition) {
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
export const createTranslationVote = /* GraphQL */ `
  mutation CreateTranslationVote(
    $input: CreateTranslationVoteInput!
    $condition: ModelTranslationVoteConditionInput
  ) {
    createTranslationVote(input: $input, condition: $condition) {
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
export const updateTranslationVote = /* GraphQL */ `
  mutation UpdateTranslationVote(
    $input: UpdateTranslationVoteInput!
    $condition: ModelTranslationVoteConditionInput
  ) {
    updateTranslationVote(input: $input, condition: $condition) {
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
export const deleteTranslationVote = /* GraphQL */ `
  mutation DeleteTranslationVote(
    $input: DeleteTranslationVoteInput!
    $condition: ModelTranslationVoteConditionInput
  ) {
    deleteTranslationVote(input: $input, condition: $condition) {
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
