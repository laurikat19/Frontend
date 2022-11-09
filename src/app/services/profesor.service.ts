import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(
    private http: HttpClient
  ) { }

  public create(profesor: any): Observable<any> {
    return this.http.post(`${environment.apiURL}/profesor/`, profesor);
  }

  public read(): Observable<any> {
    return this.http.get(`${environment.apiURL}/profesor/`);
  }

  public update(id: number, profesor: any): Observable<any> {
    return this.http.put(`${environment.apiURL}/profesor/${id}/`, profesor);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${environment.apiURL}/profesor/${id}/`);
  }

}
