export class Auth {
  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get avatar(): string {
    return this._avatar;
  }
  constructor(private _id: string,
              private _name: string,
              private _email: string,
              private _avatar: string) {
  }
}
