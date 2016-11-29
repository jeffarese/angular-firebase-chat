import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MessageService {

  constructor(private af: AngularFire) {

  }

  getMessages(): FirebaseListObservable<any> {
    return this.af.database.list('messages');
  }
  
}
