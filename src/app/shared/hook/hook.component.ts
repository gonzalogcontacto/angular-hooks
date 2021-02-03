import { AfterViewChecked, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css']
})
export class HookComponent implements OnInit , DoCheck, AfterViewChecked, OnDestroy{

  hook: string = 'ngInit';

  constructor() { 
    console.log('Se ha cargado el componente');
  }

  ngOnInit(): void {
    console.log('Se ha ejecutado el onInit');
  }

  ngDoCheck(): void {
    console.log('Se ha ejecutado el doCheck');
    // por ejemplo actualizar siempre las variables en el API.
  }

  ngAfterViewChecked () {
      console.log('Rendered');
  }

  ngOnDestroy(){
    console.log('onDestroy Ejecutado');
  }

  cambiarHook(){
    this.hook = 'ngDocheck'
  }

}
