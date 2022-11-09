import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { ModalComponent } from 'src/app/shared/modal.component';
import { ToastComponent } from 'src/app/shared/toast.component';

@Component({
  selector: 'app-asignaturas',
  templateUrl: 'asignaturas.page.html',
  styleUrls: ['asignaturas.page.scss']
})

export class AsignaturasPage implements OnInit {

  asignaturas: any;

  nombre: any;
  codigo: any;


  constructor(
    private asignatura: AsignaturaService,
    private toast: ToastComponent,
    private modal: ModalComponent,
  ) {}

  async ngOnInit() {
    this.read();
  }

  async create() {
    try {
      await this.asignatura.create({nombre: this.nombre, codigo: this.codigo}).toPromise();
      this.toast.presentSimpleToast('Asignatura Creada con exito', 1500, 'top');
      this.read();
    } catch (e) {
      console.error(e);
      this.toast.presentSimpleToast(e.error.nombre[0], 1500, 'top');
    }
  }

  async read(){
    this.asignaturas = await this.asignatura.read().toPromise();
  }

  async update(nombre: string) {
    try {
      // this.modal.test();
    } catch (e) {
      console.error(e);
      this.toast.presentSimpleToast(e.error.nombre[0], 1500, 'top');
    }
  }

  async delete(asignatura: string) {
    try {
      await this.asignatura.delete(asignatura).toPromise();
      this.toast.presentSimpleToast('Asignatura Borrada con exito', 1500, 'top');
      this.read();
    } catch (e) {
      console.error(e);
      this.toast.presentSimpleToast(e.error.nombre[0], 1500, 'top');
    }
  }
}
