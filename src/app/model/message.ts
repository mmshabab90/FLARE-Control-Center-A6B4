import { FirebaseSnapshot } from './firebase-snapshot';

export class Message extends FirebaseSnapshot{
  public userKey: string;
  public message: string;

  constructor(obj?: any) {
    super(obj);
    this.userKey = obj && obj.userKey || '';
    this.message = obj && obj.message || '';
  }
}
