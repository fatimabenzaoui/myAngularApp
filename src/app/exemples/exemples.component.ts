import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemples',
  templateUrl: './exemples.component.html',
  styleUrls: ['./exemples.component.css']
})
export class ExemplesComponent implements OnInit {
  title = 'Hello World';
  bgColor = 'yellow';
  bgColor2 = 'deeppink';
  bgColor3 = 'red';
  show = false;
  classngclass = true;
  showngif = true;
  colors = ['blue', 'red', 'yellow'];
  today: number = Date.now();
  constructor(
    private router: Router
  ) {}
  ngOnInit(): void {}
  changeStatus() {
    this.show = !this.show;
  }
  changeColor(input) {
    console.log(input.value);
    this.bgColor2 = input.value;
    input.value = '';
  }
  processReq(message: any) {
    alert(message);
  }
  goToBases() {
    const link = ['bases'];
    this.router.navigate(link);
  }
  changeClass() {
    this.classngclass = !this.classngclass;
  }
}
