import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from '../_services/token-storage.service';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from '../_services/loading.service';

 const TOKEN_HEADER_KEY = 'Authorization';       // for Spring Boot back-end
//const TOKEN_HEADER_KEY = 'x-access-token';   // for Node.js Express back-end

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService, private loadingService: LoadingService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();
    // Set loading to true when request starts
    
    if (token != null) {
      // for Spring Boot back-end
       authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });

      // for Node.js Express back-end
      //authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
    }
    this.loadingService.setLoading(true);
    return next.handle(authReq).pipe(
      finalize(() => {
        // Set loading to false when request completes (either success or error)
        this.loadingService.setLoading(false);
      })

    )
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];