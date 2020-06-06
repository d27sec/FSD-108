import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private userList = [];

  
  constructor() { 
    //when class created
    var admin = new User();
    admin.userName= 'admin';
    admin.password= 'qwerty'
    admin.firstName= 'admin'
    admin.lastName= 'user'
    admin.email='admin@admin.com'
    this.userList.push(admin)
  }

  public saveUser(user: User){
    this.userList.push(user);
  }

  public getAllUsers() {
    return this.userList;
  }

}
