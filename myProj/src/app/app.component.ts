import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 private exampleObject:{name:string,email?:string}
 constructor(){
   this.exampleObject={
     name:'rafat',
     email:'raftasuraiya94@gmail.com'
   }
 }
 chaneName(){
   this.exampleObject.name="Imran";
 }
 chaneObject(){
  this.exampleObject={
    name:'Suraiya',
    email:'suraiya94@gmail.com'
  }
 }
}
