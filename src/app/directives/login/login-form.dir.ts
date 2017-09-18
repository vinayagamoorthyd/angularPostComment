import { Component, Input } from '@angular/core';
import { RouterLink,Router } from '@angular/router';
@Component({
  selector: 'Login-form',
  templateUrl: `./login.html`,

})

  export class LoginDirComponent{
    private email:string='';
    private password:string='';
   constructor(public router:Router){

   }
      login(){
        if(this.email=='admin@g.com' && this.password=='123' ){
          this.router.navigate(['/dashboardPage']);
        }
      }

  }
