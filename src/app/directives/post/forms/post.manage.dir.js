"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var PostMangeDir = (function () {
    function PostMangeDir() {
        this.postRecords = {
            title: '',
            content: '',
            date: '',
            published: '',
            avarageNotes: '',
            views: '',
            _id: ''
        };
        this.postFormDisplay = new core_1.EventEmitter;
        this.postDataDind = new core_1.EventEmitter;
    }
    PostMangeDir.prototype.bindPostData = function () {
        this.postRecords['_id'] = Math.floor(Date.now() / 10000);
        this.postDataDind.emit(this.postRecords);
        this.postFormDisplay.emit(false);
    };
    return PostMangeDir;
}());
__decorate([
    core_1.Input('post_Id'),
    __metadata("design:type", Number)
], PostMangeDir.prototype, "post_Id", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PostMangeDir.prototype, "postFormDisplay", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PostMangeDir.prototype, "postDataDind", void 0);
PostMangeDir = __decorate([
    core_1.Component({
        selector: 'post-mange-dir',
        template: "\n  <form #commentForm='ngForm' class=\"login-form\">\n    <div class=\"form-group form-inline\">\n      <label class=\"col-md-3\"> Name {{__cid}}</label>\n      <input type=\"text\" name=\"userName\" class=\"form-control col-md-9\" [(ngModel)]='postRecords.title' #name='ngModel' />\n    </div>\n\n    <div class=\"form-group form-inline\">\n      <label class=\"col-md-3\"> title{{post_Id}}</label>\n      <input type=\"text\" name=\"userEmail\" class=\"form-control col-md-9\" [(ngModel)]='postRecords.content' #email='ngModel' />\n    </div>\n    <div class=\"form-group form-inline\">\n      <label class=\"col-md-3\"> Published</label>\n      <input type=\"number\" name=\"published\" class=\"form-control col-md-9\" [(ngModel)]='postRecords.published' #comment='ngModel'>\n    </div>\n    <div class=\"form-group form-inline\">\n      <label class=\"col-md-3\"> Avarage Notes</label>\n      <input type=\"number\" name=\"avarageNotes\" class=\"form-control col-md-9\" [(ngModel)]='postRecords.avarageNotes' #comment='ngModel'>\n    </div>\n    <div class=\"form-group form-inline\">\n      <label class=\"col-md-3\"> Views</label>\n      <input type=\"number\" name=\"views\" class=\"form-control col-md-9\" [(ngModel)]='postRecords.views' #comment='ngModel'>\n    </div>\n    <div class=\"form-group form-inline\">\n      <label class=\"col-md-3\"> </label>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"bindPostData()\"> Submit</button> &nbsp; <button type=\"button\" (click)='postFormDisplay.emit(false)' class=\"btn btn-primary\"> Cancel</button>\n    </div>\n  </form>\n  "
    })
], PostMangeDir);
exports.PostMangeDir = PostMangeDir;
