import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { CommentSerializer } from 'src/common/serializers';
import { Comment } from 'src/common/models';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService extends ResourceService<Comment> {

  constructor(private http: HttpClient) {
    super(http, 'comments', new CommentSerializer());
  }

  listForPost(id: number): Observable<Comment[]> {
    return this.http
      .get(`${environment.apiUrl}posts/${id}/comments`)
      .pipe(map((data: any) => this.convertData(data)));
  }
}
