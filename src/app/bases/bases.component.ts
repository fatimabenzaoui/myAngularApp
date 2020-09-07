import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bases',
  templateUrl: './bases.component.html',
  styleUrls: ['./bases.component.css'],
})
export class BasesComponent implements OnInit {
  showEnv = true;
  showDep = true;
  showMod = true;
  showComp = true;
  showDataBind = true;
  showDir = true;
  showPip = true;
  showServ = true;
  showRout = true;
  showRoutL = true;
  showRouterlien = true;
  showForm = true;
  showObserv = true;
  showHttpCli = true;
  showLoopB = true;
  showHttpInterc = true;
  showCanActiv = true;

  constructor() {}

  ngOnInit(): void {}

  showEnvironnement() {
    this.showEnv = !this.showEnv;
  }
  showDependances() {
    this.showDep = !this.showDep;
  }
  showModules() {
    this.showMod = !this.showMod;
  }
  showComponents() {
    this.showComp = !this.showComp;
  }
  showDataBinding() {
    this.showDataBind = !this.showDataBind;
  }
  showDirectives() {
    this.showDir = !this.showDir;
  }
  showPipes() {
    this.showPip = !this.showPip;
  }
  showServices() {
    this.showServ = !this.showServ;
  }
  showRouting() {
    this.showRout = !this.showRout;
  }
  showRouterLink() {
    this.showRoutL = !this.showRoutL;
  }
  showRouter() {
    this.showRouterlien = !this.showRouterlien;
  }
  showForms() {
    this.showForm = !this.showForm;
  }
  showObservables() {
    this.showObserv = !this.showObserv;
  }
  showHttpClient() {
    this.showHttpCli = !this.showHttpCli;
  }
  showLoopBack() {
    this.showLoopB = !this.showLoopB;
  }
  showHttpInterceptor() {
    this.showHttpInterc = !this.showHttpInterc;
  }
  showCanActivate() {
    this.showCanActiv = !this.showCanActiv;
  }
}
