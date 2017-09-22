import {UserService} from './user.service';
import { Component, OnInit } from '@angular/core';
import {User} from  './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
//INPUT ARCHITECTURE STEPS:
//We want the user-list to inheirit from the user parent
//STEP 1 create the thing the child should inheirit
//NEXT go to user.component.html
users: Array<User> = [

 ];


 
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  
  //D make a method in the parents ts file
  create(user: User){
    this._userService.create(user)
    .then(status => this.getUsers())
    .catch(err => console.log(err));
    this.users.push(user) ;
  }

  //DELETE delta LAST STEP
  destroy(user: User){
    const i = this.users.indexOf(user);
    this.users.splice(i, 1);
  }

  update(users: any){
    const i = this.users.indexOf(users.original)
    this.users[i]= users.edited;
  }

  getUsers(){
    this._userService.getUsers()
    .then(users => this.users = users)
    .catch(err => console.log(err));
  }



}
