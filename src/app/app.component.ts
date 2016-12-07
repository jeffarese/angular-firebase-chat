import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { MessageService } from './message/message.service';
import { Auth } from './auth/auth';

const BOT_NAME: string = 'Paje Real';
const BOT_AVATAR: string = 'https://firebasestorage.googleapis.com/v0/b/react-firebase-chat-74da6.appspot.com/o/img%2Fpaje_real.png?alt=media&token=7c2a5fd4-09ac-4997-8c50-ae9e1de8fca7';
const BOT_EMAIL: string = 'botemail@email.com';

const BOT_USER: Auth = new Auth('bot-id', BOT_NAME, BOT_EMAIL, BOT_AVATAR);

const BOT_TRIGGERS: string[] = [
  'react',
  'android',
  'angular',
  'javascript',
  'polymer',
  'java',
  'python',
  'patata',
];

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
      this.messageService.sendMessage(messageInput.value, this.auth).subscribe(()=> {
        this.createBotMessage(messageInput.value.toLowerCase()).subscribe((data: any)=> {
          this.messageService.sendMessage(data.$value, BOT_USER);
        });
      });
      messageInput.value = '';
    }
  }

  createBotMessage(text: string): FirebaseObjectObservable<any> {
    let foundTrigger: string = 'default';
    BOT_TRIGGERS.forEach((trigger: string)=> {
      if (text.includes(trigger)) {
        foundTrigger = trigger;
      }
    });
    return this.messageService.getBotMessage(foundTrigger);
  }
}
