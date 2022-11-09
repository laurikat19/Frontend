import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { ToastComponent } from 'src/app/shared/toast.component';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-asignaturas',
  templateUrl: 'asignaturas.page.html',
  styleUrls: ['asignaturas.page.scss']
})

export class AsignaturasPage implements OnInit {

  @ViewChild(IonModal) modalAsignatura: IonModal;

  asignaturas: any;

  nombre: any;
  codigo: any;

  asignaturaId: any;
  nombreEdit: any;
  codigoEdit: any;


  constructor(
    private asignatura: AsignaturaService,
    private toast: ToastComponent,
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
      this.toast.presentSimpleToast(JSON.stringify(e.error), 1500, 'top');
    }
  }

  async read(){
    this.asignaturas = await this.asignatura.read().toPromise();
  }

  async update(id: number) {
    try {
      await this.asignatura.update(id, {nombre: this.nombreEdit, codigo: this.codigoEdit }).toPromise();
      this.toast.presentSimpleToast('Profesor Creada con exito', 1500, 'top');
      this.read();
    } catch (e) {
      console.error(e);
      this.toast.presentSimpleToast(JSON.stringify(e.error), 1500, 'top');
    }
  }

  async delete(id: number) {
    try {
      await this.asignatura.delete(id).toPromise();
      this.toast.presentSimpleToast('Asignatura Borrada con exito', 1500, 'top');
      this.read();
    } catch (e) {
      console.error(e);
      this.toast.presentSimpleToast(JSON.stringify(e.error), 1500, 'top');
    }
  }

    /// ModalComponent
    cancel() {
      this.modalAsignatura.dismiss(null, 'cancel');
    }

    confirm() {
      this.modalAsignatura.dismiss(null, 'confirm');
    }

    onWillDismiss(event: Event) {
      const ev = event as CustomEvent<OverlayEventDetail<string>>;
      if (ev.detail.role === 'confirm') {
        this.update(this.asignaturaId);
      }
    }
}
