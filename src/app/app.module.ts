import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';


//Pages
import { LoginDirComponent } from './directives/login/login-form.dir';
import { contactPage } from './pages/contact/contact';
import { DashboardPage } from './directives/dashboard/dashboard.componant';
import { postPage } from './pages/post/post.componant';
import { commentsPage } from './pages/comments/comments.componant';
import { topNavigation } from './pages/navigation/topNav/topNav.dir';
import { leftNavigation } from './pages/navigation/leftNav/leftNav.dir';
import { CommentMangeDir} from './directives/comments/forms/comment.manage.dir';
import { PostMangeDir} from './directives/post/forms/post.manage.dir';



const appRoutes: Routes = [
  { path: 'login', component: LoginDirComponent },
  { path: 'contact', component: contactPage },
  { path: 'dashboardPage', component: DashboardPage },
  { path: 'postPage', component: postPage },
  { path: 'commentsPage', component: commentsPage },
  { path: 'topNavigation', component: topNavigation },
  { path: 'leftNavigation', component: leftNavigation },


  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:  [ BrowserModule, FormsModule ,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )

  ],
  declarations: [ AppComponent, LoginDirComponent, contactPage, DashboardPage,
    postPage, commentsPage,topNavigation, leftNavigation,
  CommentMangeDir, PostMangeDir ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
