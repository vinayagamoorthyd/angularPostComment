"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DashboardPage = (function () {
    function DashboardPage() {
    }
    return DashboardPage;
}());
DashboardPage = __decorate([
    core_1.Component({
        template: "\n  <nav class=\"navbar  bg-primary justify-content-between\">\n    <a class=\"navbar-brand\">Welcome Admin</a>\n    <form class=\"form-inline\">\n    <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n    <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </nav>\n\n  <div class=\"container-fluid\">\n\n    <div class=\"row\">\n    <div class=\"col-md-3\">\n      <div class=\"left-sidebar\">\n        <a [routerLink]=\"['/commentsPage']\" class=\"btn btn-default\">Comment</a>\n        <a [routerLink]=\"['/postPage']\" class=\"btn btn-default\">Post</a>\n      </div>\n      </div>\n      \n      </div>\n    </div>\n ",
        styles: ["\n    .container{width:100%;}\n    .left-sidebar{ background:#fff;min-height:600px; box-shadow: 0px 4px 4px #ddd;}\n    .left-sidebar a {float:left; width:100%;padding:20px 10px; }\n    .icons{ text-align:right;}\n    .icons div{float:left;}\n    .navbar-brand{color:#fff !important}\n    "]
    })
], DashboardPage);
exports.DashboardPage = DashboardPage;
