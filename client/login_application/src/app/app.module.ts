import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginAppService } from './services/loginapp.service';
import { UserService } from './services/userservice.service';
import { ManagerComponent } from './components/manager/manager.component';
import { ManagerGuard } from './manager.guard';
import { AuthGuard } from './authenticate.guard';
import { TranslateModule } from '@ngx-translate/core';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    ManagerComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot()
  ],
  providers: [
    LoginAppService,
    UserService,
    AuthGuard,
    ManagerGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
