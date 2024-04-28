import { Component } from '@angular/core';
import { LoadingService } from '../_services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  loading: boolean = this.loadingService.isLoading();
  constructor(public loadingService: LoadingService) {}
}
