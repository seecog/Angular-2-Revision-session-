import { Component, ViewChild, ElementRef, Renderer, OnInit } from '@angular/core';
import { CalculatorService } from './music/calculator.service';

@Component({
  selector: 'app-salman',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private name : string = "Mohan ";
  private age : number = 21;
  private salary : number = 400;
  private a : number = 2;
  private b : number = 5;
  @ViewChild('myRef') x : ElementRef;
  constructor(private renderer : Renderer,private calc : CalculatorService){

  }

  ngOnInit(){
console.log('The sum is ',(this.calc.add(2,5)))
  }
  
  go(i){
console.log('The data is ',i.value);
  }

  changeColor(){
    this.renderer.setElementStyle(this.x,'color','green');
  }
}


