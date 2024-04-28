import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './authenticate.guard';
import { ManagerComponent } from './components/manager/manager.component';
import { ManagerGuard } from './manager.guard';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, // 
  { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard]},
  { path: 'manager', component: ManagerComponent, canActivate: [AuthGuard, ManagerGuard] }
];
// const routes: Routes = [
//   { path: '', redirectTo: 'en/login', pathMatch: 'full' },
//   { path: ':lang/login', component: LoginComponent },
//   { path: ':lang/welcome', component: WelcomeComponent, canActivate: [AuthGuard] },
//   { path: ':lang/manager', component: ManagerComponent, canActivate: [AuthGuard, ManagerGuard] }
// ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
