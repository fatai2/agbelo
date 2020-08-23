import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Post {
  readonly id: string;
  readonly postContent?: string;
  readonly translations?: Translation[];
  readonly createdAt?: string;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

export declare class Translation {
  readonly id: string;
  readonly translationIvie: string;
  readonly exampleIvie?: string;
  readonly exampleEnglish?: string;
  readonly post?: Post;
  constructor(init: ModelInit<Translation>);
  static copyOf(source: Translation, mutator: (draft: MutableModel<Translation>) => MutableModel<Translation> | void): Translation;
}