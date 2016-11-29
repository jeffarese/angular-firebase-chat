import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material';
import { AuthService } from './auth/auth.service';
import { MessageService } from './messages/message.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyBTKeSmJ-EZT8gFtdQxTdvcw3kDv1xK4pc',
  authDomain: 'react-firebase-chat-74da6.firebaseapp.com',
  databaseURL: 'https://react-firebase-chat-74da6.firebaseio.com',
  storageBucket: 'react-firebase-chat-74da6.appspot.com',
  messagingSenderId: '1005738784121'
};

@NgModule({
  declarations: [
    AppComponent,
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
