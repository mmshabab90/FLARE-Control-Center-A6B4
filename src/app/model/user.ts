import { FirebaseSnapshot } from './firebase-snapshot';

export class User extends FirebaseSnapshot {
  public fullName: string;
  public email: string;
  public username: string;
  public password: string;

  constructor(obj?: any) {
    super(obj);
    this.fullName = obj && obj.fullName || '';
    this.email = obj && obj.email || '';
    this.username = obj && obj.username || '';
    this.password = obj && obj.password || '';
  }
}
