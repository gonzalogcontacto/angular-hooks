import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'hooksAngular';
  public showHook:boolean = true;

  dontRenderHookComponent(){
    this.showHook = false;
  }
  
}
