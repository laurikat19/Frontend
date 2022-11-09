import { Component } from '@angular/core';
import { AsignaturaService } from 'src/app/services/asignatura.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: 'asignaturas.page.html',
  styleUrls: ['asignaturas.page.scss']
})
export class AsignaturasPage {

  constructor(
    private asignatura: AsignaturaService,
  ) {}

  async ngOnInit() {
    const resp = await this.asignatura.read().toPromise()
    console.log(resp);
  }

}
