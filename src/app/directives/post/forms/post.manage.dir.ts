import {Component, Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector:'post-mange-dir',
  template:`
  <form #commentForm='ngForm' class="login-form">
    <div class="form-group form-inline">
      <label class="col-md-3"> Name {{__cid}}</label>
      <input type="text" name="userName" class="form-control col-md-9" [(ngModel)]='postRecords.title' #name='ngModel' />
    </div>

    <div class="form-group form-inline">
      <label class="col-md-3"> title{{post_Id}}</label>
      <input type="text" name="userEmail" class="form-control col-md-9" [(ngModel)]='postRecords.content' #email='ngModel' />
    </div>
    <div class="form-group form-inline">
      <label class="col-md-3"> Published</label>
      <input type="number" name="published" class="form-control col-md-9" [(ngModel)]='postRecords.published' #comment='ngModel'>
    </div>
    <div class="form-group form-inline">
      <label class="col-md-3"> Avarage Notes</label>
      <input type="number" name="avarageNotes" class="form-control col-md-9" [(ngModel)]='postRecords.avarageNotes' #comment='ngModel'>
    </div>
    <div class="form-group form-inline">
      <label class="col-md-3"> Views</label>
      <input type="number" name="views" class="form-control col-md-9" [(ngModel)]='postRecords.views' #comment='ngModel'>
    </div>
    <div class="form-group form-inline">
      <label class="col-md-3"> </label>
      <button type="button" class="btn btn-primary" (click)="bindPostData()"> Submit</button> &nbsp; <button type="button" (click)='postFormDisplay.emit(false)' class="btn btn-primary"> Cancel</button>
    </div>
  </form>
  `

})

export class PostMangeDir{
  private postRecords:any={
    title:'',
    content:'',
    date:'',
    published:'',
    avarageNotes:'',
    views:'',
    _id:''

  }
  @Input('post_Id') post_Id:number;
  @Output() postFormDisplay:EventEmitter<boolean>= new EventEmitter;
  @Output() postDataDind:EventEmitter<any>=new EventEmitter;
  bindPostData(){
    this.postRecords['_id']=Math.floor(Date.now() / 10000);
    this.postDataDind.emit(this.postRecords);
    this.postFormDisplay.emit(false)
  }

}
