import { Resource } from './resource';

export interface Comment extends Resource {
  postId: number;
  name: string;
  email: string;
  body: string;
}
