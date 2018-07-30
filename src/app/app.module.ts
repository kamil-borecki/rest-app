import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { CommonModule } from 'src/common';
import { ComponentsModule } from 'src/components';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    ToastrModule.forRoot(),
    CommonModule.forRoot(),
    ComponentsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
