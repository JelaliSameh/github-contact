import { Component , OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from 'src/app/models/contact';
@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit{
  statusContact:boolean=false;
  myContact: Contact;
  contacts:any;
  
  constructor(private contactService: ContactService){}
  ngOnInit(){
    this.contactService.getContacts()?.subscribe(contact =>{
    this.contacts=contact;
    console.log(this.contacts);
    }
      )
  }
  updateContact(contact){
    this.contactService.updateContact(contact);
    this.statusContact= false;
  }
  editContact(contact){
    this.statusContact= true;
    this.myContact=contact;

  }
  deleteContact(contact){
    if(confirm('are sure to delete this contact !!' )){
      this.contactService.destroyContact(contact); 
    }
    else{
      this.statusContact= false;
    }
  }

}

