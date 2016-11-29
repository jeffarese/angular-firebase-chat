import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

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
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
