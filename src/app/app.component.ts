import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularComponent';
  counterValue=0;
  reset(){
    this.counterValue=0;
  }
  increment(){
    this.counterValue++;
  }
  decrement(){
    if(this.counterValue!=0)
    this.counterValue--;
  }
}
