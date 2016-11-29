export class Message {
  get avatar(): string {
    return this._avatar;
  }

  get displayName(): string {
    return this._displayName;
  }

  get text(): string {
    return this._text;
  }

  get date(): number {
    return this._date;
  }
  constructor(private _avatar: string, private _displayName: string, private _text: string, private _date: number) {
  }
}
