export class Message {

  constructor(public avatar: string, public displayName: string, public text: string, public date: number) {
    this.avatar = avatar;
    this.displayName = displayName;
    this.text = text;
    this.date = date;
  }
}
