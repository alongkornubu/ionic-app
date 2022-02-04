import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { Alert } from 'selenium-webdriver';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-avatarpg',
  templateUrl: './avatarpg.page.html',
  styleUrls: ['./avatarpg.page.scss'],
})
export class AvatarpgPage implements OnInit {
  //countrylist: any;
  //countrylist = ['Thailand', 'Vietnam', 'Malasia', 'Singapore'];
  // icon
  shoplist = [
     {icon: 'headset-sharp',
      name: 'Headset',
      price: '2000฿'} ,
      { icon: 'game-controller-sharp',
      name: 'Game Controller',
      price: '500฿'
      },
      { icon: 'watch-sharp',
      name: 'Watch',
      price: '2100฿'
      },
      {icon: 'print-sharp',
      name: 'Printter',
      price: '2000฿'} 
  ];

  constructor(public myrouter: Router, 
    public alertCtrl: AlertController) {


  }

  showinfo(tmpitem: any){
    const data = JSON.stringify(tmpitem);
    this.myrouter.navigate(['avatarresult', data]);
  }

  async presentConfirmDEL(item: any) {
    const alert = this.alertCtrl.create({
      header: 'Delete',
      message: 'Do you want to delete?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            // console.log('Buy clicked');
            this.removeItem(item);
          }
        }
      ]
    });
    (await alert).present();
  }
  
  async presentPromptEdit(getcountryname:string) {
    const alert = this.alertCtrl.create({
      header: 'Edit',
      inputs: [
        {
          name: 'inputname',
          placeholder: 'Name'
        },
        {
          name: 'inputprice',
          placeholder: 'Price'
          
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Update',
          handler: data => {

            for (let i=0; i< this.shoplist.length; i++){
              if (this.shoplist[i].name === getcountryname){ //found
                this.shoplist[i].name = data.inputname;
                this.shoplist[i].price = data.inputprice;
              }
            }//for
            }//handle
          } 
      ]
    });
    (await alert).present();
  }

  removeItem(item) {
    for (let i = 0; i < this.shoplist.length; i++) {
      if (this.shoplist[i] == item) {
        this.shoplist.splice(i, 1);
      }
    }
  }

  
  ngOnInit() {
  }

}
