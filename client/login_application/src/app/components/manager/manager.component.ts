import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAppService } from 'src/app/services/loginapp.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {

  currentLanguage: string = 'en';

  constructor(
    private loginService: LoginAppService,
    private router: Router
  ) { }

  logout() {
    this.loginService.logout().subscribe(
      () => {
        console.log('Logout successful');
        this.loginService.clearUserDetails();
        this.router.navigate([`/login`]);
      },
      error => {
        console.log('Logout failed', error);
      }
    );
  }

}
