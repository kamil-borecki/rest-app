import { Component, OnInit, Input } from '@angular/core';
import { Post, User } from 'src/common/models';
import { CommentService, UserService } from 'src/common/services';
import { Comment } from 'src/common/models';
import { commentsListTransition } from 'src/common/animations';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
  animations: [commentsListTransition]
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  public user: User;
  public comments: Comment[] = [];
  public showComments = false;
  constructor(private commentService: CommentService, private userService: UserService) { }

  ngOnInit() {
    if (this.post.id) {
      this.commentService.listForPost(this.post.id).subscribe((data: Comment[]) => {
        this.comments = data;
      });
      this.userService.get(this.post.userId).subscribe((data: User) => {
        this.user = data;
      });
    }
  }
  toggleComments() {
    this.showComments = !this.showComments;
  }

}
