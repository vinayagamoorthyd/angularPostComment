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
var postPage = (function () {
    function postPage() {
        this.postDisplay = false;
        this.posts = [
            {
                '_id': '01',
                'name': 'vinayagam',
                'content': 'welcome',
                'published': '10/12/2017',
                'avarageNotes': 'welcome',
                'views': '10',
                'date': '10/12/2017'
            },
            {
                '_id': '02',
                'name': 'moorthy',
                'content': 'welcome',
                'published': '31/09/2017',
                'avarageNotes': 'welcome',
                'views': '22',
                'date': '31/12/2017'
            },
            {
                '_id': '03',
                'name': 'venkat',
                'content': 'welcome',
                'published': '10/10/2017',
                'avarageNotes': 'welcome',
                'views': '15',
                'date': '22/12/2017'
            },
            {
                '_id': '04',
                'name': 'kannand',
                'content': 'welcome',
                'published': '22/03/2017',
                'avarageNotes': 'welcome',
                'views': '20',
                'date': '22/03/2017'
            }
        ];
    }
    postPage.prototype.insertPostData = function (data) {
        (this.posts).push(data);
    };
    return postPage;
}());
postPage = __decorate([
    core_1.Component({
        templateUrl: "./view.post.html"
    }),
    __metadata("design:paramtypes", [])
], postPage);
exports.postPage = postPage;
