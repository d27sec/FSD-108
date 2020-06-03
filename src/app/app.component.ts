import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ERP';
  count=0;
  inputText='';

  test() {
    this.title = 'i changed the value of a var';
    this.inputText='';
  }
  increaseCount(){
    this.count +=1
  }

  tsOverview(){
    var name : string = "daniel perez"
    var number: number = 27.22;
    var age : number= 25;
    var found: boolean= false;
    var list : number[]=[]
    
    var oldWay : any;
  }

}

