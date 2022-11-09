import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asignatura } from '../interfaces/models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  constructor(
    private http: HttpClient
  ) { }

  public create(asignatura: Asignatura): Observable<any> {
    return this.http.post(`${environment.apiURL}/signup/`, asignatura)
  }

  public read(): Observable<any> {
    return this.http.get(`${environment.apiURL}/asignatura/`)
  }

  public update(asignaturaName: string, asignatura: Asignatura): Observable<any> {
    return this.http.put(`${environment.apiURL}/asignatura/${asignaturaName}/`, asignatura)
  }

  public delete(asignaturaName: String): Observable<any> {
    return this.http.delete(`${environment.apiURL}/asignatura/${asignaturaName}/`)
  }
}
