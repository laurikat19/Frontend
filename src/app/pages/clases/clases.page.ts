import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { ClaseService } from 'src/app/services/clase.service';
import { ProfesorService } from 'src/app/services/profesor.service';
import { ModalComponent } from 'src/app/shared/modal.component';
import { ToastComponent } from 'src/app/shared/toast.component';

@Component({
  selector: 'app-clases',
  templateUrl: 'clases.page.html',
  styleUrls: ['clases.page.scss']
})
export class ClasesPage implements OnInit {

  clases: any;
  profesores: any;
  asignaturas: any;

  salon: any;
  horario: any;
  profesorId: any;
  asignaturaId: any;


  constructor(
    private clase: ClaseService,
    private asignatura: AsignaturaService,
    private profesor: ProfesorService,
    private toast: ToastComponent,
    private modal: ModalComponent,
  ) {}

  async ngOnInit() {
    this.read();
  }

  async create() {
    try {
      await this.clase.create({
        salon: this.salon,
        horario: this.horario,
        asignatura: this.asignaturaId,
        profesor: this.profesorId,
      }).toPromise();
      this.toast.presentSimpleToast('Clase Creada con exito', 1500, 'top');
      this.read();
    } catch (e) {
      console.error(e);
      this.toast.presentSimpleToast(JSON.stringify(e.error), 1500, 'top');
    }
  }

  async read(){
    this.clases = await this.clase.read().toPromise();
    this.profesores = await this.profesor.read().toPromise();
    this.asignaturas = await this.asignatura.read().toPromise();
  }

  async update(id: number) {
    try {
      // this.modal.test();
    } catch (e) {
      console.error(e);
      this.toast.presentSimpleToast(JSON.stringify(e.error), 1500, 'top');
    }
  }

  async delete(id: number) {
    try {
      await this.clase.delete(id).toPromise();
      this.toast.presentSimpleToast('Clase Borrada con exito', 1500, 'top');
      this.read();
    } catch (e) {
      console.error(e);
      this.toast.presentSimpleToast(JSON.stringify(e.error), 1500, 'top');
    }
  }
}
