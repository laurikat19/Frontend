import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  constructor(
    private http: HttpClient
  ) { }
}
