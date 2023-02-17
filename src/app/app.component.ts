import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  patientList=[{id:1,name:'Samapika',color:'rgb(255,0,0,0.1)',image:'./assets/images/samapika.png'},
  {id:2,name:'Dalpreet',color:'rgb(0,0,255,0.1)',image:'./assets/images/dalpreet.png'},
  {id:3,name:'Kinjal',color:'rgb(0,255,255,0.1)',image:'./assets/images/kinjal.png'},
  {id:4,name:'Noman',color:'rgb(128,0,0,0.1)',image:'./assets/images/noman.png'}];
  constructor(){
  //   this.appList.forEach(item => {
  //     item.color = '#' + Math.floor(Math.random()*16777215).toString(16);
  //  });
  }
  showFiller = false;
  icon=false;

  SlideClick(drawer:any){
    drawer.toggle();
    if(this.icon){
      this.icon=false;
      (document.getElementsByClassName('example-sidenav-content')[0] as HTMLElement).style.width='79%';
    }else{
      this.icon=true;
      (document.getElementsByClassName('example-sidenav-content')[0] as HTMLElement).style.width='98%';
    }
  }
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan.`;
  color='pink';

  Random_Color()  
 {   
   this.Color();    
 }  

 Color()  
 {  
   this.color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","  
   +  
   Math.floor(Math.random() * 255) + ")";    
   return this.color;
 }  
 isVisible=false;
//  patient:any;
 tabs = [{id:0,name:'Home',patient:''}];
  selected:number=0;

 CardClick(i:any){
  this.isVisible=true;
  //this.patient=i;
  this.tabs.push({id:i.id,name:i.name,patient:i});
  this.selected=this.tabs.length - 1;
 }


  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}
