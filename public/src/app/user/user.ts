//3. this is where we define the user model
//this is where we define the model
//NEXT go to user.service.ts
export class User {
    constructor(
      public _id: string = "",
      public first_name: string = "",
      public last_name: string = "",
      public email: string = "",
      public editable: boolean = false
    ){}
  }
