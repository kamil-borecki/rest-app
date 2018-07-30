import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Serializer, Resource } from 'src/common/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResourceService<T extends Resource> {

  constructor(
    private httpClient: HttpClient,
    private resource: string,
    private serializer: Serializer
  ) { }

  get(id: number): Observable<T> {
    return this.httpClient
      .get(`${environment.apiUrl}${this.resource}/${id}`)
      .pipe(map(data => this.serializer.fromJson(data) as T));
  }

  list(): Observable<T[]> {
    return this.httpClient
      .get(`${environment.apiUrl}${this.resource}`)
      .pipe(map((data: any) => this.convertData(data)));
  }

  protected convertData(data: any): T[] {

    return data.map(item => this.serializer.fromJson(item));
  }
}
