import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MessageService } from './message/message.service';
import { Auth } from './auth/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private auth: Auth;
  private messages: FirebaseListObservable<any>;

  constructor(private authService: AuthService, private af: AngularFire, private messageService: MessageService) {
    this.af.auth.subscribe((data: any)=> {
      if (data) {
        this.auth = new Auth(data.uid, data.auth.displayName, data.auth.email, data.auth.photoURL);
        this.getMessages();
      } else {
        this.auth = null;
      }
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  getMessages() {
    this.messageService.getMessages().subscribe((messages: FirebaseListObservable<any>) => {
      this.messages = messages;
    });
  }
  
  sendMessage(messageInput: HTMLInputElement) {
    if (messageInput.value !== '') {
      this.messageService.sendMessage(messageInput.value, this.auth);
      messageInput.value = '';
    }
  }
}
