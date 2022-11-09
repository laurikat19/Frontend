import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {

  constructor(
    private http: HttpClient
  ) { }

  public create(clase: any): Observable<any> {
    return this.http.post(`${environment.apiURL}/clase/`, clase);
  }

  public read(): Observable<any> {
    return this.http.get(`${environment.apiURL}/clase/`);
  }

  public update(id: number, clase: any): Observable<any> {
    return this.http.put(`${environment.apiURL}/clase/${id}/`, clase);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${environment.apiURL}/clase/${id}/`);
  }

}
