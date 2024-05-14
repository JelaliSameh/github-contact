import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ContactService } from './services/contact.service';
import { NavbarComponent } from './componenents/navbar/navbar.component';
import { ListContactComponent } from './componenents/list-contact/list-contact.component';
import { AddContactComponent } from './componenents/add-contact/add-contact.component';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListContactComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule

  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
