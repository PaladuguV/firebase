import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomeComponent } from './auth/home/home.component';
import { NavigationComponent } from './auth/navigation/navigation.component';
import { AuthService } from './auth/auth.service'
import { environment } from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path:"home", component : HomeComponent},
      { path:"register", component : RegistrationComponent},
      { path:"login", component : LoginComponent},
      { path:"", redirectTo:"home", pathMatch: "full"},
      { path:"**", redirectTo:"home"}
    ])
  ],
  providers: [AuthService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
