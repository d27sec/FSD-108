import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {


    email='';
    password = '';
    isErrorVisible=false

  constructor(private dataSrv: DataService, private shared: SharedService, private router: Router) { }

  ngOnInit(): void {
  }
  
  login(){
    var allUsers = this.dataSrv.getAllUsers();
    var found= false
    for(let i=0; i< allUsers.length; i++){
      var user = allUsers[i];


      if(this.email==user.email && this.password==user.password){
        console.log('logged in')
        found = true;
        //change the shared service values
        this.shared.isUserLoggedIn=true;
        this.shared.userName= user.userName;
        //redirect user to another page
        this.router.navigate(['/user/create'])

      }
    }
    //never found a match activate isErrorVisible flag
    if(!found){
      this.isErrorVisible=true;
    setTimeout(()=> this.isErrorVisible=false, 2000)
      
    }

    console.log('login attempt with', this.email, this.password)
  }

}

/*
  Create route (done)

  Create a menu item (done)

  Create the login form (Html) (done)

  inject the service in this cmp

  on login fn, compare the email and pass against each on the dataservice array
*/


