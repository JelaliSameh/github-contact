import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { Contact } from '../models/contact';
@Injectable()
export class ContactService {

  contactDoc: AngularFirestoreDocument<Contact>;
  contactsCollection: AngularFirestoreCollection<Contact>;
  contacts: Observable<Contact[]>;
  constructor(private afs:AngularFirestore) { 
   this.contactsCollection = this.afs.collection('contacts');
   this.contacts=this.contactsCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Contact;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  );
  }
  getContacts(){
    return this.contacts;
  }
  createContact(contact: Contact){
    this.contactsCollection.add(contact);
    
  }
  updateContact(contact: Contact){
    this.contactDoc = this.contactsCollection.doc<Contact>(contact.id);
    this.contactDoc.update (contact);

  }
  destroyContact(contact: Contact){
    this.contactDoc = this.contactsCollection.doc<Contact>(contact.id);
    this.contactDoc.delete();


  }
}
