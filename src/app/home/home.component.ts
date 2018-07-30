import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/common/services';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/common/models';
import { listTransition } from 'src/common/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [listTransition]
})
export class HomeComponent implements OnInit {
  public list: Post[] = [];
  private posts: Post[] = [];
  private count = 5;
  constructor(private postService: PostService, private toastSErvice: ToastrService) { }

  ngOnInit() {
    this.postService.list().subscribe((data: Post[]) => {
      this.posts = data;
      this.list = this.posts.slice(0, this.count);
    });
  }
  onScroll() {
    console.log('scrolled!!');
    if (this.count < this.posts.length) {
      this.count += 5;
      this.list = this.posts.slice(0, this.count);
    }
  }

}
