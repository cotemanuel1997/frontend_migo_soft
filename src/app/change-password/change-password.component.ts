import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  form: any = {
    password: null
  };
  token: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  parametro = '';
  message = '';

  constructor(private authService: AuthService, private route: ActivatedRoute, private tokenService: TokenStorageService) { 
    this.token = this.tokenService.getTokenForgotPass();
  }
  
  onSubmit(): void {
    const {  password } = this.form;
    console.log(this.token);
    console.log(password)
    this.authService.resetPasword( this.token, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.message = data.message;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.parametro = params['token'];
      console.log(this.parametro)
    });
  }
}
