import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material';
import { AuthService } from './auth/auth.service';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message/message.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyA_xccLhwGTSPFXJFj4O8YVh6ymz1RixjY',
  authDomain: 'angular-firebase-chat-9f6b6.firebaseapp.com',
  databaseURL: 'https://angular-firebase-chat-9f6b6.firebaseio.com',
  storageBucket: 'angular-firebase-chat-9f6b6.appspot.com',
  messagingSenderId: '6840919264'
};

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
