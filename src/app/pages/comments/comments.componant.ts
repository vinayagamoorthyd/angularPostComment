import { Component } from '@angular/core';


@Component({
  templateUrl: `./view.comments.html`
})
export class commentsPage  {
  private comments:any={};
  private displayForm:boolean=false;
  private formcid:number;

  constructor() {
    this.comments=[
      {
        'title':'Angular Feature',
        'comment':'Angular Feature',
        'date':'10/08/2017',
        '_id':'01'
      },
      {
        'title':'Angular Feature',
        'comment':'Angular Feature',
        'date':'13/08/2017',
        '_id':'02'
      },
      // {
      //   'title':'Angular Feature',
      //   'content':'Angular Feature',
      //   'date':'18/08/2017',
      //   '_id':'03'
      // },
      // {
      //   'title':'Angular Feature',
      //   'content':'Angular Feature',
      //   'date':'20/08/2017',
      //   '_id':'04'
      // },
      // {
      //   'title':'Angular Feature',
      //   'content':'Angular Feature',
      //   'date':'25/08/2017',
      //   '_id':'05'
      // },
]
 }


 insertData(data:any){
   (this.comments).push(data);
 }

}
