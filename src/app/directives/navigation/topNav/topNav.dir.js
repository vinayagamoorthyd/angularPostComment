"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var topNavigation = (function () {
    function topNavigation() {
    }
    return topNavigation;
}());
topNavigation = __decorate([
    core_1.Component({
        selector: 'top-nav',
        template: "<nav class=\"navbar navbar-light bg-primary justify-content-between\">\n    <a class=\"navbar-brand\">Welcome Admin</a>\n    <!--form class=\"form-inline\">\n    <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n    <button class=\"btn btn-outline-default my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form -->\n  </nav>"
    })
], topNavigation);
exports.topNavigation = topNavigation;
