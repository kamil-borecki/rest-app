import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingIndicatorService {
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() { }

  get isLoading$(): Observable<boolean> {
    return this.isLoading.asObservable();
  }
  show() {
    this.isLoading.next(true);
  }
  hide(){
    this.isLoading.next(false);
  }
}
