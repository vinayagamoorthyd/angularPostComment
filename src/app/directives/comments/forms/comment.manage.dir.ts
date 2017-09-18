import {Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'comment-mange-dir',
  template:`
  <form #commentForm='ngForm' class="login-form">
    <div class="form-group form-inline">
      <label class="col-md-3"> Name {{__cid}}</label>
      <input type="text" name="userName" class="form-control col-md-9" [(ngModel)]='records.title' #name='ngModel' />
    </div>

    <div class="form-group form-inline">
      <label class="col-md-3"> title</label>
      <input type="text" name="userEmail" class="form-control col-md-9" [(ngModel)]='records.comment' #email='ngModel' />
    </div>
    <div class="form-group form-inline">
      <label class="col-md-3"> date</label>
      <input type="text" name="comments" class="form-control col-md-9" [(ngModel)]='records.date' #comment='ngModel'>
    </div>
    <div class="form-group form-inline">
      <label class="col-md-3"> </label>
      <button type="button" class="btn btn-primary" (click)="bindData()"> Submit</button> &nbsp; <button type="button" (click)='formDisplay.emit(false)' class="btn btn-primary"> Cancel</button>
    </div>
  </form>
  `
})

export class  CommentMangeDir {
  private records:any={
    title:'',
    comment:'',
    date:'',
    _id:''
  };

  @Input('cid') __cid:number;
  @Output() formDisplay: EventEmitter<boolean>=new EventEmitter();
  @Output() formData: EventEmitter<any> = new EventEmitter();
  bindData(){
    this.records['_id']=Math.floor(Date.now() / 10000);
     this.formData.emit(this.records);
     this.formDisplay.emit(false);
  }
}
