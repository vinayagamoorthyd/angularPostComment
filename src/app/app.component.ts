import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';


@Component({
  selector: 'my-app',
  template: `
    <router-outlet></router-outlet>
    
  `
})
export class AppComponent  {
  constructor (public router:Router){

  }

}
