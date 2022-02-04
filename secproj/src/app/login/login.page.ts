import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  constructor(public toastCtrl: ToastController) {}

  ngOnInit() {}
  async openToast() {
    const toast = await this.toastCtrl.create({
      /*message: 'It is a Toast Notification',
    showCloseButton: true,
    closeButtonText: 'hide', */
      message: 'message here…' + this.email,
      duration: 5000,
    });
    toast.present();
  }
}