import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loading = false;

  constructor() { }

  setLoading(status: boolean) {
    this.loading = status;
  }

  isLoading() {
    return this.loading;
  }
}
