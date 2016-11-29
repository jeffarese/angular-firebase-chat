export class Auth {
  constructor(public id: string,
              public name: string,
              public email: string,
              public avatar: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.avatar = avatar;
  }
}
