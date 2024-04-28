import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterDto } from 'src/app/models/registerDTO.model';
import { LoginAppService } from 'src/app/services/loginapp.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name!: string;
  username!: string;
  password!: string;

  constructor(
    private loginService: LoginAppService,
    private router: Router
  ) { }

  submit() {
    const registerDto: RegisterDto = {
      name: this.name,
      username: this.username,
      password: this.password,
      role: 'user'
    };

    this.loginService.register(registerDto)
      .subscribe(
        () => {
          console.log("User registered successfully!");
          this.router.navigate(['/login']);
        },
        error => {
          console.log("Registration failed:", error);
        }
      );
  }
}