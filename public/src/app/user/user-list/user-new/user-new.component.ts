import { User } from '../../user';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
// B. put down the new user
   newUser = new User();
//put down the output
  @Output() createNewUserEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


//since you called it <form (submit)="create()">
  create(){
      //call server to save
      this.createNewUserEvent.emit(this.newUser);
      this.newUser = new User();
  }

  //B END
  //NEXT: go to user.component.html


}
 