import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BasesComponent } from './bases/bases.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { HighlightDirective } from './directive/highlight.directive';
import { ExamplesComponent } from './examples/examples.component';
import { EnfantComponent } from './enfant/enfant.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { ObservableComponent } from './observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasesComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    HighlightDirective,
    ExamplesComponent,
    EnfantComponent,
    NgstyleComponent,
    ObservableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
