import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Auth } from './auth/auth';
import { MessageService } from './message/message.service';
import { Message } from './message/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private auth: Auth;
  private messages: Message[] = [];

  constructor(private authService: AuthService, private af: AngularFire, private messageService: MessageService) {
    this.af.auth.subscribe((data: any)=> {
      if (data) {
        this.auth = new Auth(data.uid, data.google.displayName, data.google.email, data.google.photoURL);
      } else {
        this.auth = null;
      }
    });
    this.getMessages();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  getMessages() {
    this.messageService.getMessages().subscribe((messages: FirebaseListObservable<any>) => {
      messages.map((message)=> {
        this.messages.push(new Message(message.avatar, message.displayName, message.text, message.date));
      });
      console.log(this.messages);
    });
  }
}
