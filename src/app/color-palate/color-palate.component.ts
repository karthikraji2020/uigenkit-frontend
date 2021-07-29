import { AfterViewInit, Component, OnInit } from '@angular/core';
import'./../../assets/js/colorPalette.js'; 
//  declare var hexToRGB:any;
 declare var getData:any;
@Component({
  selector: 'app-color-palate',
  templateUrl: './color-palate.component.html',
  styleUrls: ['./color-palate.component.css']
})
export class ColorPalateComponent implements OnInit,AfterViewInit {

 
  constructor() { }

  ngOnInit(): void {
    // this.log(hexToRGB('#212120'));
  }
    ngAfterViewInit(){
    setTimeout(() => {
         new getData();
    },3000);
  }

}
