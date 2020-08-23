/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateTranslation = /* GraphQL */ `
  subscription OnCreateTranslation {
    onCreateTranslation {
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
export const onUpdateTranslation = /* GraphQL */ `
  subscription OnUpdateTranslation {
    onUpdateTranslation {
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
export const onDeleteTranslation = /* GraphQL */ `
  subscription OnDeleteTranslation {
    onDeleteTranslation {
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
export const onCreateTranslationVote = /* GraphQL */ `
  subscription OnCreateTranslationVote {
    onCreateTranslationVote {
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
export const onUpdateTranslationVote = /* GraphQL */ `
  subscription OnUpdateTranslationVote {
    onUpdateTranslationVote {
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
export const onDeleteTranslationVote = /* GraphQL */ `
  subscription OnDeleteTranslationVote {
    onDeleteTranslationVote {
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
