// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Post, Translation } = initSchema(schema);

export {
  Post,
  Translation
};