import { Component, Input } from '@angular/core';
import { Comment } from 'src/common/models';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent {
  @Input() public comment: Comment;
  constructor() { }


}
