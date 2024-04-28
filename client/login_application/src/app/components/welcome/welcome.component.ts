import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetails } from 'src/app/models/userdetails.model';
import { LoginAppService } from 'src/app/services/loginapp.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  userDetails: UserDetails | null = null;
  currentLanguage: string = 'en';


  constructor(
    private loginService: LoginAppService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userDetails = this.loginService.userDetails;
    this.route.paramMap.subscribe(params => {
      this.currentLanguage = params.get('lang') || 'en';
    });
  }

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