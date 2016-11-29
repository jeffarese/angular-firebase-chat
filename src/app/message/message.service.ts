import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Auth } from '../auth/auth';
import { Message } from './message';

@Injectable()
export class MessageService {

  constructor(private af: AngularFire) {

  }

  getMessages(): FirebaseListObservable<any> {
    return this.af.database.list('messages');
  }

  sendMessage(text: string, user: Auth) {
    let newMessage = new Message(user.avatar, user.name, text, new Date().getTime());
    this.af.database.list('messages').push(newMessage);
  }
}
