import { Component, OnInit } from '@angular/core';
import { ProfesorService } from 'src/app/services/profesor.service';
import { ModalComponent } from 'src/app/shared/modal.component';
import { ToastComponent } from 'src/app/shared/toast.component';

@Component({
  selector: 'app-profesores',
  templateUrl: 'profesores.page.html',
  styleUrls: ['profesores.page.scss']
})
export class ProfesoresPage implements OnInit {


  profesores: any;

  nombre: any;
  correo: any;
  telefono: any;


  constructor(
    private profesor: ProfesorService,
    private toast: ToastComponent,
    private modal: ModalComponent,
  ) {}

  async ngOnInit() {
    this.read();
  }

  async create() {
    try {
      await this.profesor.create({nombre: this.nombre, correo: this.correo, telefono: this.telefono}).toPromise();
      this.toast.presentSimpleToast('Profesor Creada con exito', 1500, 'top');
      this.read();
    } catch (e) {
      console.error(e);
      this.toast.presentSimpleToast(JSON.stringify(e.error), 1500, 'top');
    }
  }

  async read(){
    this.profesores = await this.profesor.read().toPromise();
  }

  async update(nombre: string) {
    try {
      // this.modal.test();
    } catch (e) {
      console.error(e);
      this.toast.presentSimpleToast(JSON.stringify(e.error), 1500, 'top');
    }
  }

  async delete(id: number) {
    try {
      await this.profesor.delete(id).toPromise();
      this.toast.presentSimpleToast('Profesor Borrada con exito', 1500, 'top');
      this.read();
    } catch (e) {
      console.error(e);
      this.toast.presentSimpleToast(JSON.stringify(e.error), 1500, 'top');
    }
  }
}
