"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
//Pages
var login_form_dir_1 = require("./directives/login/login-form.dir");
var contact_1 = require("./pages/contact/contact");
var dashboard_componant_1 = require("./directives/dashboard/dashboard.componant");
var post_componant_1 = require("./pages/post/post.componant");
var comments_componant_1 = require("./pages/comments/comments.componant");
var topNav_dir_1 = require("./pages/navigation/topNav/topNav.dir");
var leftNav_dir_1 = require("./pages/navigation/leftNav/leftNav.dir");
var comment_manage_dir_1 = require("./directives/comments/forms/comment.manage.dir");
var post_manage_dir_1 = require("./directives/post/forms/post.manage.dir");
var appRoutes = [
    { path: 'login', component: login_form_dir_1.LoginDirComponent },
    { path: 'contact', component: contact_1.contactPage },
    { path: 'dashboardPage', component: dashboard_componant_1.DashboardPage },
    { path: 'postPage', component: post_componant_1.postPage },
    { path: 'commentsPage', component: comments_componant_1.commentsPage },
    { path: 'topNavigation', component: topNav_dir_1.topNavigation },
    { path: 'leftNavigation', component: leftNav_dir_1.leftNavigation },
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule,
            router_1.RouterModule.forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
            )
        ],
        declarations: [app_component_1.AppComponent, login_form_dir_1.LoginDirComponent, contact_1.contactPage, dashboard_componant_1.DashboardPage,
            post_componant_1.postPage, comments_componant_1.commentsPage, topNav_dir_1.topNavigation, leftNav_dir_1.leftNavigation,
            comment_manage_dir_1.CommentMangeDir, post_manage_dir_1.PostMangeDir],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
