import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingIndicatorService } from 'src/common/services';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.sass']
})
export class LoadingIndicatorComponent implements OnInit {
  public isLoading$: Observable<boolean>;

  constructor(private loadingService: LoadingIndicatorService) { }

  ngOnInit() {
    this.isLoading$ = this.loadingService.isLoading$;
  }

}
