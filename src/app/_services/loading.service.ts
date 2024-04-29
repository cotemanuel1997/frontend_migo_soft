import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingSubject = new BehaviorSubject<boolean>(false);
  
  constructor() { }

  setLoading(status: boolean) {
    this.loadingSubject.next(status);
  }

  isLoading() {
    return this.loadingSubject.asObservable();
  }
}
