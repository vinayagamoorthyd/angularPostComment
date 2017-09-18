import { Component } from '@angular/core';


@Component({
  templateUrl: `./view.post.html`
})

export class postPage  {
private postDisplay:boolean=false;
private posts:any;
private post_Id:number;
constructor(){
    this.posts=[
      {
          '_id':'01',
          'name':'vinayagam',
          'content':'welcome',
          'published':'10/12/2017',
          'avarageNotes':'welcome',
          'views':'10',
          'date':'10/12/2017'
      },
      {
          '_id':'02',
          'name':'moorthy',
          'content':'welcome',
          'published':'31/09/2017',
          'avarageNotes':'welcome',
          'views':'22',
          'date':'31/12/2017'
      },
      {
          '_id':'03',
          'name':'venkat',
          'content':'welcome',
          'published':'10/10/2017',
          'avarageNotes':'welcome',
          'views':'15',
          'date':'22/12/2017'
      },
      {
          '_id':'04',
          'name':'kannand',
          'content':'welcome',
          'published':'22/03/2017',
          'avarageNotes':'welcome',
          'views':'20',
          'date':'22/03/2017'
      }
    ]
}
insertPostData(data:any){
  (this.posts).push(data);
}
}
