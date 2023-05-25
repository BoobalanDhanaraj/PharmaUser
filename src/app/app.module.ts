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
import { SignupComponent } from './components/signup/signup.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { CartFormComponent } from './components/cart-form/cart-form.component';
import { CartComponent } from './components/cart/cart.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
@NgModule({
  declarations: [AppComponent, DropdownDirectives, HomePageComponent, LoginComponent, SignupComponent, UserDashboardComponent, CartFormComponent, CartComponent, MainNavComponent],
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
