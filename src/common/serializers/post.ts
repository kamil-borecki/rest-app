import { Serializer, Post } from 'src/common/models';

export class PostSerializer implements Serializer {
  fromJson(json: any): Post {
    const post: Post = {
      id: json.id,
      userId: json.userId,
      title: json.title,
      body: json.body
    };
    return post;
  }
}
