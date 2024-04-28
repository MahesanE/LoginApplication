import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserDetails } from 'src/app/models/userdetails.model';
import { LoginAppService } from 'src/app/services/loginapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userId!: string;
  password!: string;
  cannotLogin!: string;
  userDetails!: UserDetails;
  currentLanguage: string = 'en';

  constructor(
    private loginService: LoginAppService, 
    private router: Router,
    private route: ActivatedRoute,
    private translateService : TranslateService,
    private changeDetectorRef : ChangeDetectorRef
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      let lang = params['lang'];
      if (lang && lang !== this.currentLanguage) {
        this.currentLanguage = lang;
        this.translateService.use(lang);
        this.changeDetectorRef.detectChanges();
      }
    });
  }

  submit() {
    this.cannotLogin = "";
    this.loginService.login(this.userId, this.password)
      .subscribe(
        (response: UserDetails) => {
          console.log("Login is successful!", response);
          this.userDetails = response;
          this.loginService.setUserDetails(this.userDetails);
          this.router.navigate([`/welcome`]);
        },
        error => {
          console.log("Cannot login :(", error);
          this.cannotLogin = "Invalid userid or password. Please try again.";
        }
      );
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

//   toggleLanguage() {
//     this.currentLanguage = this.currentLanguage === 'en' ? 'es' : 'en';
//     const url = this.currentLanguage === 'en' ? '/' : `/${this.currentLanguage}/`;
//     this.router.navigateByUrl(url);
//   }



}