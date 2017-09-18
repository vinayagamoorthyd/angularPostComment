import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  template: `
  <nav class="navbar  bg-primary justify-content-between">
    <a class="navbar-brand">Welcome Admin</a>
    <form class="form-inline">
    <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </nav>

  <div class="container-fluid">

    <div class="row">
    <div class="col-md-3">
      <div class="left-sidebar">
        <a [routerLink]="['/commentsPage']" class="btn btn-default">Comment</a>
        <a [routerLink]="['/postPage']" class="btn btn-default">Post</a>
      </div>
      </div>
      
      </div>
    </div>
 `,
  styles:[`
    .container{width:100%;}
    .left-sidebar{ background:#fff;min-height:600px; box-shadow: 0px 4px 4px #ddd;}
    .left-sidebar a {float:left; width:100%;padding:20px 10px; }
    .icons{ text-align:right;}
    .icons div{float:left;}
    .navbar-brand{color:#fff !important}
    `]

})
export class DashboardPage {

}
