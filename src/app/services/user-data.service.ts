import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  data = [{
    name: "Unknown",
    email: "unknown@something.com",
    password: "",
    type: "",
    dob: "",
    address: ""
  }];

  currentUser = new BehaviorSubject(this.data[0]);
  usernameValue = new BehaviorSubject(this.username);

  constructor() {
   }

  set username(value) {
    this.usernameValue.next(value);
    localStorage.setItem('currentUser', JSON.stringify(value));
  }
 
  get username() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  saveData(user) {
    let flag = 0;
    let username = user.email;
    let users = [];

    if (localStorage.getItem("user") === null) {
      users = this.data;
    }
    else {
      users = JSON.parse(localStorage.getItem("user"));
      this.data = users;
    }
    for(let [i,element] of users.entries()) {
      if (element.email == username) {
        return "User Already Exits";
      }
    }
    this.data.push(user);
    localStorage.setItem("user", JSON.stringify(this.data));
    return "Signup Successfull"
  }

  loginCurrentUser(user) {
    let users = JSON.parse(localStorage.getItem("user"));
    let username = user.email;
    for(let [i,element] of users.entries()) {
      if (element.email == username) {
        this.currentUser.next(this.data[i]);
        // localStorage.setItem("currentUser", JSON.stringify(element));
        this.username = element;
        return "Login Successfull"
      }
    }

    return "Unsucessfull Login"
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("user"));
  }

  updateData(user) {
    let users = JSON.parse(localStorage.getItem("user"));

    for(let [i,element] of users.entries()) {
      if (element.email == user.email) {
        users[i] = user;
        localStorage.setItem('user', JSON.stringify(users));
        break;
      }
    }
  }

  deleteData(email) {
    let users = JSON.parse(localStorage.getItem("user"));

    for(let [i,element] of users.entries()) {
      if (element.email == email) {
        users.splice(i, 1);
        localStorage.setItem('user', JSON.stringify(users));
        break;
      }
    }    
  }
}
