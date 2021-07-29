import { AfterViewInit, Component, OnInit } from '@angular/core';
// import'./../../assets/js/linearGradient.js'; 

@Component({
  selector: 'app-linear-gradient',
  templateUrl: './linear-gradient.component.html',
  styleUrls: ['./linear-gradient.component.css']
})
export class LinearGradientComponent implements OnInit,AfterViewInit {

  constructor() { }


  ngOnInit(): void {
  }
 
  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
    this.loadScript('./../../assets/js/linearGradient.js');
    });
  }
  

}
