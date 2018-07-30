import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { PostSerializer } from 'src/common/serializers/post';
import { Post } from 'src/common/models';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends ResourceService<Post> {


  constructor(private http: HttpClient) {
    super(http, 'posts', new PostSerializer());
  }

  listForUser(id: number): Observable<Post[]> {
    return this.http
      .get(`${environment.apiUrl}users/${id}/posts`)
      .pipe(map((data: any) => this.convertData(data)));
  }
}
