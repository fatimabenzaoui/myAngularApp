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
  showHttpInterc = true;
  showCanActiv = true;
  showDeployGhPages = true;

  constructor() {}

  ngOnInit(): void {}

  showEnvironnement(): void {
    this.showEnv = !this.showEnv;
  }
  showDependances(): void {
    this.showDep = !this.showDep;
  }
  showModules(): void {
    this.showMod = !this.showMod;
  }
  showComponents(): void {
    this.showComp = !this.showComp;
  }
  showDataBinding(): void {
    this.showDataBind = !this.showDataBind;
  }
  showDirectives(): void {
    this.showDir = !this.showDir;
  }
  showPipes(): void {
    this.showPip = !this.showPip;
  }
  showServices(): void {
    this.showServ = !this.showServ;
  }
  showRouting(): void {
    this.showRout = !this.showRout;
  }
  showRouterLink(): void {
    this.showRoutL = !this.showRoutL;
  }
  showRouter(): void {
    this.showRouterlien = !this.showRouterlien;
  }
  showForms(): void {
    this.showForm = !this.showForm;
  }
  showObservables(): void {
    this.showObserv = !this.showObserv;
  }
  showHttpClient(): void {
    this.showHttpCli = !this.showHttpCli;
  }
  showHttpInterceptor(): void {
    this.showHttpInterc = !this.showHttpInterc;
  }
  showCanActivate(): void {
    this.showCanActiv = !this.showCanActiv;
  }
  showDeploy(): void {
    this.showDeployGhPages = !this.showDeployGhPages;
  }
}
