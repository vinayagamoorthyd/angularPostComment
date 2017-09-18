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
var CommentMangeDir = (function () {
    function CommentMangeDir() {
        this.records = {
            title: '',
            comment: '',
            date: '',
            _id: ''
        };
        this.formDisplay = new core_1.EventEmitter();
        this.formData = new core_1.EventEmitter();
    }
    CommentMangeDir.prototype.bindData = function () {
        this.records['_id'] = Math.floor(Date.now() / 10000);
        this.formData.emit(this.records);
        this.formDisplay.emit(false);
    };
    return CommentMangeDir;
}());
__decorate([
    core_1.Input('cid'),
    __metadata("design:type", Number)
], CommentMangeDir.prototype, "__cid", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CommentMangeDir.prototype, "formDisplay", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CommentMangeDir.prototype, "formData", void 0);
CommentMangeDir = __decorate([
    core_1.Component({
        selector: 'comment-mange-dir',
        template: "\n  <form #commentForm='ngForm' class=\"login-form\">\n    <div class=\"form-group form-inline\">\n      <label class=\"col-md-3\"> Name {{__cid}}</label>\n      <input type=\"text\" name=\"userName\" class=\"form-control col-md-9\" [(ngModel)]='records.title' #name='ngModel' />\n    </div>\n\n    <div class=\"form-group form-inline\">\n      <label class=\"col-md-3\"> title</label>\n      <input type=\"text\" name=\"userEmail\" class=\"form-control col-md-9\" [(ngModel)]='records.comment' #email='ngModel' />\n    </div>\n    <div class=\"form-group form-inline\">\n      <label class=\"col-md-3\"> date</label>\n      <input type=\"text\" name=\"comments\" class=\"form-control col-md-9\" [(ngModel)]='records.date' #comment='ngModel'>\n    </div>\n    <div class=\"form-group form-inline\">\n      <label class=\"col-md-3\"> </label>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"bindData()\"> Submit</button> &nbsp; <button type=\"button\" (click)='formDisplay.emit(false)' class=\"btn btn-primary\"> Cancel</button>\n    </div>\n  </form>\n  "
    })
], CommentMangeDir);
exports.CommentMangeDir = CommentMangeDir;
