import { NgModule, ModuleWithProviders, ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { KeysPipe } from './pipes';
import { UserService, PostService, CommentService, LoadingIndicatorService } from './services';
import { HttpRequestInterceptor } from './interceptors';
import { CustomErrorHandler } from './handlers';

const PROVIDERS = [
  UserService,
  PostService,
  CommentService,
  LoadingIndicatorService,
  {
    provide: ErrorHandler,
    useClass: CustomErrorHandler,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true
  },
];

@NgModule({
  declarations: [KeysPipe],
  imports: [HttpClientModule, ToastrModule.forRoot()],
  exports: [KeysPipe]
})
export class CommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonModule,
      providers: PROVIDERS
    };
  }
}
