import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, tap } from 'rxjs';



const AUTH_API = 'https://backend-migo-soft.onrender.com/api/auth/';
//const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(username: string, email: string, password: string, role: string[]): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
        role
      },
      httpOptions
    );
  }

  sendEmail(email: string): Observable<any>{
    return this.http.get(
      AUTH_API + 'forgot-password',
      {
        params : {
          email : email
        }
      }
    );

  
  
  
  }

  verifyToken(token: string): Observable<any>{
    return this.http.get(
      AUTH_API + 'verify-token',
      {
        params : {
          token : token
        }
      }
    );

  }
  resetPasword(token: string, password: string): Observable<any>{
    const params = new HttpParams()
      .set('token', token)
      .set('password', password);
    return this.http.put(
      AUTH_API + 'reset-password',
      null, // No hay cuerpo en esta solicitud
      { params: params } // Pasar los parámetros como opción en la solicitud
    );

  }


}
