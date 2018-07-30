import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, tap } from 'rxjs/operators';
import { LoadingIndicatorService } from 'src/common/services';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingIndicatorService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.show();
    return next.handle(request).pipe(retry(5), tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.loadingService.hide();
      }
    }, (err: any) => {
      this.loadingService.hide();
    }));
  }
}
