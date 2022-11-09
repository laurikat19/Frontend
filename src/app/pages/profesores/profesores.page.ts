import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfesorService } from 'src/app/services/profesor.service';
import { IonModal } from '@ionic/angular';
import { ToastComponent } from 'src/app/shared/toast.component';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-profesores',
  templateUrl: 'profesores.page.html',
  styleUrls: ['profesores.page.scss']
})
export class ProfesoresPage implements OnInit {

  @ViewChild(IonModal) modal: IonModal;

  profesores: any;

  nombre: any;
  correo: any;
  telefono: any;

  profesorId: any;
  nombreEdit: any;
  correoEdit: any;
  telefonoEdit: any;

  constructor(
    private profesor: ProfesorService,
    private toast: ToastComponent,
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

  async update(id: number) {
    try {
      await this.profesor.update(id, {nombre: this.nombreEdit, correo: this.correoEdit, telefono: this.telefonoEdit}).toPromise();
      this.toast.presentSimpleToast('Profesor Creada con exito', 1500, 'top');
      this.read();
    } catch (e) {
      console.error(e);
      this.toast.presentSimpleToast(JSON.stringify(e.error), 1500, 'top');
    }
  }

  async delete(id: any) {
    try {
      await this.profesor.delete(id).toPromise();
      this.toast.presentSimpleToast('Profesor Borrada con exito', 1500, 'top');
      this.read();
    } catch (e) {
      console.error(e);
      this.toast.presentSimpleToast(JSON.stringify(e.error), 1500, 'top');
    }
  }

  /// ModalComponent
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.update(this.profesorId);
    }
  }
}
