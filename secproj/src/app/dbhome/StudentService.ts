import { Injectable } from '@angular/core';
import { Student } from './student';
import 'firebase/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  userList: AngularFireList<any>;
  userRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase, private ngFirestore: AngularFirestore) { }

  // Create
  createUser(user: any) {
    return this.ngFirestore.collection('student').add(user);
  }

  getData() {
    return this.ngFirestore.collection('student').snapshotChanges();
  }

  // Update
  updateUser(id, updatedata: any) {
    return this.ngFirestore.doc('student/'+id).update(updatedata);
  }

  // Delete
  deleteUser(delid) {
    return this.ngFirestore.doc('student/'+delid).delete();
  }
}
