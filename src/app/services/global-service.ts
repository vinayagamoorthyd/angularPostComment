import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
@Injectable()

export class globalService{
private data:any={};
  constructor(){
    this.data=JSON.parse(localStorage.getItem('gsData'));

  }
setData(data:any){
  this.data=data;
  localStorage.setItem('gsData', JSON.stringify(this.data));
}
getData(){
  return this.getData;
}
clearData(){
  this.data={};
  localStorage.removeItem('gsData');
}
strlength(str:string){
  return str.length;
}

}
