import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { User } from 'src/common/models';
import { HttpClient } from '@angular/common/http';
import { UserSerializer } from 'src/common/serializers';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ResourceService<User> {

  constructor(private http: HttpClient) {
    super(http, 'users', new UserSerializer());
  }
}
