import { Serializer, Comment } from 'src/common/models';

export class CommentSerializer implements Serializer {
  fromJson(json: any): Comment {
    const comment: Comment = {
      id: json.id,
      postId: json.postId,
      name: json.name,
      email: json.email,
      body: json.body
    };
    return comment;
  }
}
