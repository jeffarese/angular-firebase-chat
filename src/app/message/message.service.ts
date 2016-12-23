import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Auth } from '../auth/auth';
import { Message } from './message';
import { Observable } from 'rxjs';


@Injectable()
export class MessageService {

  constructor(private af: AngularFire) {

  }

  getMessages(user: Auth): FirebaseListObservable<any> {
    return this.af.database.list(`${user.id}/messages`);
  }

  sendMessage(text: string, user: Auth, auth?: Auth) {
    let newMessage = new Message(user.avatar, user.name, text, new Date().getTime());
    if (auth) {
      return Observable.of(this.af.database.list(`${auth.id}/messages`).push(newMessage));
    }
    return Observable.of(this.af.database.list(`${user.id}/messages`).push(newMessage));
  }

  getBotMessage(trigger: string): FirebaseObjectObservable<any> {
    console.log('get bot');
    return this.af.database.object(`bot/${trigger}`);
  }
}
