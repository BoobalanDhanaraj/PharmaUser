import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
//import { RouteGuards } from './services/RouteGuardsService.service';
import { AuthService } from './services/auth.service';
import { LoginService } from './services/login.service';
import { UsersService } from './services/users.service';
import { NgToastModule } from 'ng-angular-popup';
import { DropdownDirectives } from './helpers/dropdown.directive';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [AppComponent, DropdownDirectives, HomePageComponent, LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgToastModule,
  ],

  providers: [AuthService, LoginService, UsersService], //RouteGuards
  bootstrap: [AppComponent],
})
export class AppModule {}
