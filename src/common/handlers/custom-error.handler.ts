import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandler implements ErrorHandler {

  constructor(
    private injector: Injector,
  ) { }

  handleError(error: Error | HttpErrorResponse) {
    const notificationService = this.injector.get(ToastrService);
    if (error instanceof HttpErrorResponse) {
      if (!navigator.onLine) {
        return notificationService.error('No Internet Connection', null, { onActivateTick: true });
      }
      return notificationService.error(`${error.status} - ${error.message}`, null, { onActivateTick: true });
    }
    console.error(error);
  }
}
