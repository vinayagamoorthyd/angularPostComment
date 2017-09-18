import { Component } from '@angular/core';


@Component({
  selector : 'left-nav',
  template: `<div class="left-sidebar">
  <ul>
    <li [class.active]="router.isRouteActive(router.generate(['/commentsPage']))">
      <a [routerLink]="['/commentsPage']">Comment</a>
    </li>
    <li>
      <a [routerLink]="['/postPage']" class="btn btn-default">Post</a>
    </li>
  </ul>
  </div>`

})
export class leftNavigation {

}
