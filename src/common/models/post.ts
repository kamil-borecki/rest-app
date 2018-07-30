import { Resource } from './resource';

export interface Post extends Resource {
  userId: number;
  title: string;
  body: string;
}
