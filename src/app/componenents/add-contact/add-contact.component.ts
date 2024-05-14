import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  statutsContact: boolean = false;
contact: Contact = {
  name: '',
  telephone: 0

}
constructor(private contactService:ContactService){}
ngOnInit(){

}
newContact(){
  this.contactService.createContact(this.contact);
  this.contact.name = "";
  this.contact.telephone = null;
  this.statutsContact = false; 
}

}
