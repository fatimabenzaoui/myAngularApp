import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {

  title = 'Hello World';
  bgColor = 'orangered';
  bgColor2 = 'deeppink';
  bgColor3 = 'red';
  show = false;
  classngclass = true;
  showngif = true;
  colors = ['blue', 'red', 'yellow'];
  today: number = Date.now();

  constructor() {}
  ngOnInit(): void {}

  changeStatus(): void {
    this.show = !this.show;
  }

  changeColor(input: any): void {
    console.log(input.value);
    this.bgColor2 = input.value;
    input.value = '';
  }

  processReq(message: any): void {
    alert(message);
  }

  changeClass(): void {
    this.classngclass = !this.classngclass;
  }
}
