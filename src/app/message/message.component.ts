import { Component, OnInit } from '@angular/core';
import { Message } from './message';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message: Message;
  constructor() { }

  ngOnInit() {
  }

}
