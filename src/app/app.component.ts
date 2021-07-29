import { Component } from '@angular/core';
 declare var hexToRGB:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uigenkit-frontend';

  constructor() { }
  
  ngOnInit(): void {
  }
  // ngAfterViewInit(){
  //   setTimeout(() => {
  //        hexToRGB('#212120');
  //   },3000);

}

