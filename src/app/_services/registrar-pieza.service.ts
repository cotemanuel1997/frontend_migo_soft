import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, tap } from 'rxjs';



const AUTH_API = 'https://backend-migo-soft.onrender.com/api/auth/';
//const AUTH_API = 'http://localhost:8080/api/test/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RegistrarPiezaService {

  constructor(private http: HttpClient) { }

  register(nombre: string, materialidad: string, taller: string, estado: string, terminacion: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'regpieza',
      {
        nombre,
        materialidad,
        taller,
        estado,
        terminacion
      },
      httpOptions
    );
  }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(AUTH_API + 'getPiezas');
  }
}
