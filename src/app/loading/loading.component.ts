import { Component } from '@angular/core';
import { LoadingService } from '../_services/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  loading: boolean = false;
  private loadingSubscription: Subscription;

  constructor(public loadingService: LoadingService) {
    this.loadingSubscription = this.loadingService.isLoading().subscribe(loading => {
      this.loading = loading;
    });

  }
  
}
