import { Injectable } from '@angular/core';
import { ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastComponent {

  constructor(
    private toastController: ToastController
  ) { }

  public async presentSimpleToast(message: string, duration: 1000 | 1500 | 3000, position: 'top' | 'middle' | 'bottom'): Promise<void> {
    const toast = await this.toastController.create({message, duration, position});
    await toast.present();
  }

  public async presentToast(toastOptions: ToastOptions): Promise<void> {
    const toast = await this.toastController.create(toastOptions);
    await toast.present();
  }
}
