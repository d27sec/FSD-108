import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-converter',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.scss']
})
export class TempConverterComponent implements OnInit {

  celsuis = 0;
  fahrenheit= 0;


  constructor() { }

  convertToF(){
    console.log('f')
    this.fahrenheit= (this.celsuis * (9/5) +32)
  }
  
  convertToC(){
    console.log('c')
    this.celsuis=((this.fahrenheit -32) * (5/9))
    
  }

  ngOnInit(): void {
  }

}
