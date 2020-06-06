import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  model: User = new User();
  retypePassword = undefined;
  isAlertVisible = false;
  

  //in constructor you inject the services
  constructor(private dataSrv: DataService, public shared: SharedService) { }

  ngOnInit(): void {
  }

  save(){
    console.log('saving ', this.model);

    this.dataSrv.saveUser(this.model);

    //clear the form
    this.model= new User();
    this.retypePassword= "";

    //show the alert
    this.isAlertVisible= true;
    setTimeout(()=> {
      this.isAlertVisible= false;
    },2000)
  }

}
