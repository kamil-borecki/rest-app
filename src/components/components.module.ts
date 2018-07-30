import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule as NgCommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from 'src/common';
import { MenuComponent } from './menu';
import { PostComponent } from './post';
import { CommentComponent } from './comment';
import { LoadingIndicatorComponent } from './loading-indicator';

const DECLARATIONS_EXPORTS = [
  MenuComponent,
  PostComponent,
  CommentComponent,
  LoadingIndicatorComponent
];

const PROVIDERS = [
];

@NgModule({
   declarations: [
      DECLARATIONS_EXPORTS
   ],
   imports: [
      CommonModule,
      NgCommonModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule
   ],
   exports: [
      DECLARATIONS_EXPORTS
   ]
})

export class ComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ComponentsModule,
      providers: PROVIDERS
    };
  }
}
