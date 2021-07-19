import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private toastController: ToastController,
    public loadingController: LoadingController
  ) { }

  errorHandler(error: any) {
    console.log(error)
    if (error.code == 400) {
      this.showToast(error.message)
    } else if (error.code == 401) {
      this.showToast("Invalid Password")
    } else if (error.code == 500) {
      this.showToast(error.message)
    }
  }

  async showToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  async startLoader() {
    const loading = await this.loadingController.create({
      // cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
  }

  async stopLoader() {
    return await this.loadingController.dismiss();
  }

}
