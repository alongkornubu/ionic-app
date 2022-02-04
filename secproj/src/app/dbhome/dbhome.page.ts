import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Student } from './student';
import { StudentService } from './StudentService';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'dbhome.page.html',
  styleUrls: ['dbhome.page.scss'],
})

export class DbhomePage implements OnInit {
  stdobj: any;
  searchTerm: string;
  constructor(private apiservice: StudentService, private alertCtrl: AlertController,
    private router: Router, private ngFirestore: AngularFirestore) { }

  ngOnInit() {
    this.apiservice.getData().subscribe((res) => {
      this.stdobj = res.map((t) => ({
          id: t.payload.doc.id,
          name: t.payload.doc.data()['sname'.toString()],
          age: t.payload.doc.data()['age'.toString()],
          address: t.payload.doc.data()['address'.toString()]
        }));
        console.log(this.stdobj);
      });

      
      

    }//method

    async presentPromptAdd() {
      const alert = this.alertCtrl.create({
        subHeader: 'Add',
        inputs: [
          {
            name: 'name',
            placeholder: 'Name'
          },
          {
            name: 'age',
            placeholder: 'Age'
          },
          {
            name: 'address',
            placeholder: 'Address'
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
            text: 'Add',
            handler: data => {
              const tmpdata = {};
               tmpdata['sname'.toString()] = data.name;
               tmpdata['age'.toString()] = data.age;
               tmpdata['address'.toString()] = data.address;
                  this.apiservice.createUser(tmpdata);
                  console.log(tmpdata);
            }
          }
        ]
      });
      (await alert).present();
    }

    async presentConfirmDelete(delid: any) {
      const alert = this.alertCtrl.create({
        subHeader: 'Delete', // Header
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
              //console.log('Buy clicked');

              this.apiservice.deleteUser(delid);
            }
          }
        ]
      });
      (await alert).present();
    }

// Update
    //async presentPromptEdit(id, name, age, address) {
      async presentPromptEdit(tmpobj) {
      const alert = this.alertCtrl.create({
        subHeader: 'Edit',
        message: 'Now you are editing '+name,
        inputs: [
          {
            name: 'name',
            placeholder: tmpobj.name,
            value: tmpobj.name
          },
          {
            name: 'age',
            placeholder:tmpobj.age,
            value: tmpobj.age
          },
          {
            name: 'address',
            placeholder: tmpobj.address,
            value: tmpobj.address
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
              const updatedata = {};
               updatedata['sname'.toString()] = data.name;
               updatedata['age'.toString()] = data.age;
               updatedata['address'.toString()] = data.address;
               ///this.ngFirestore.doc('/Student/'+id).update(updatedata);
               this.apiservice.updateUser(tmpobj.id, updatedata);
               console.log(updatedata);
            }
          }
        ]
      });
      (await alert).present();
    }


}//class
