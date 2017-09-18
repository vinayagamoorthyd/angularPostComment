"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var leftNavigation = (function () {
    function leftNavigation() {
    }
    return leftNavigation;
}());
leftNavigation = __decorate([
    core_1.Component({
        selector: 'left-nav',
        template: "<div class=\"left-sidebar\">\n  <ul>\n    <li [class.active]=\"router.isRouteActive(router.generate(['/commentsPage']))\">\n      <a [routerLink]=\"['/commentsPage']\">Comment</a>\n    </li>\n    <li>\n      <a [routerLink]=\"['/postPage']\" class=\"btn btn-default\">Post</a>\n    </li>\n  </ul>\n  </div>"
    })
], leftNavigation);
exports.leftNavigation = leftNavigation;
