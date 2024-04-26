import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-token-password',
  templateUrl: './token-password.component.html',
  styleUrl: './token-password.component.css'
})
export class TokenPasswordComponent {
  form: any = {
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,  private router: Router, private tokenService: TokenStorageService) { }

  onSubmit(): void {
    const {  password } = this.form;
    this.tokenService.setTokenForgotPass(password);
    console.log(this.tokenService.setTokenForgotPass(password))

    this.authService.verifyToken( password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        
        this.router.navigate(['/reset-password']);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });

    
  }
}
