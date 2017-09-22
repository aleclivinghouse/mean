import { User } from './../user';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
// STEP 3. put down the input attribute on the child's component page
//NEXT go to user-list.component.html
  @Input() users;

  // DELETE Beta: put the output annotation down
  @Output() destroyUserEvent = new EventEmitter();
  @Output() updateUserEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
 //do this too
  destroy(user: User){
    this.destroyUserEvent.emit(user);
  }

  update(users){
    this.updateUserEvent.emit(users)
  }

  //DELTE BETA NEXT: user.component.html

}
