import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ROUTING } from './app.routing';

// CONTACT-APP
import { ContactComponent } from './contactApp/contact/contact.component';
import { ListeContactComponent } from './contactApp/liste-contact/liste-contact.component';
import { ItemContactComponent } from './contactApp/item-contact/item-contact.component';
import { DetailContactComponent } from './contactApp/detail-contact/detail-contact.component';
import { AddContactComponent } from './contactApp/add-contact/add-contact.component';
import { SelectContactComponent } from './contactApp/select-contact/select-contact.component';
import { UpdateContactComponent } from './contactApp/update-contact/update-contact.component';
// OTHER COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { BasesComponent } from './bases/bases.component';
import { ExemplesComponent } from './exemples/exemples.component';
import { EnfantComponent } from './enfant/enfant.component';
import { StyleComponent } from './directive/style/style.component';
import { HighlightDirective } from './directive/highlight.directive';
import { DefaultImagePipe } from './contactApp/default-image.pipe';
import { ObservableComponent } from './observable/observable.component';
import { HttpComponent } from './http/http.component';
import { LoginComponent } from './login/login.component';
// PROVIDERS
import { LoginInterceptorProvider } from './interceptors/login.interceptor';
import { LogoutGuard } from './guard/logout.guard';
import { LoginGuard } from './guard/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent, 
    BasesComponent,
    ExemplesComponent,
    EnfantComponent,
    HighlightDirective, 
    StyleComponent,  
    DefaultImagePipe,
    ContactComponent,
    ItemContactComponent,
    ListeContactComponent,
    SelectContactComponent,
    DetailContactComponent,
    AddContactComponent,
    UpdateContactComponent, 
    ErrorComponent,
    ObservableComponent,
    HttpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ROUTING,
    HttpClientModule
  ],
  providers: [
    LoginInterceptorProvider,
    LoginGuard,
    LogoutGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
