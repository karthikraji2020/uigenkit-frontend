import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neumorphism',
  templateUrl: './neumorphism.component.html',
  styleUrls: ['./neumorphism.component.css']
})
export class NeumorphismComponent implements OnInit,AfterViewInit {

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
  public loadStyle(url: string) {
    const body = <HTMLDivElement> document.body;
    const link =<any> document.createElement('link');
    link.innerHTML = '';
    link.href = url;
    // link.async = false;
    link.defer = true;
    body.appendChild(link);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
    this.loadScript('./../../assets/js/neumorphism.js');
    this.loadStyle('./../../assets/css/neumorphism.css');
    });
  }
}
