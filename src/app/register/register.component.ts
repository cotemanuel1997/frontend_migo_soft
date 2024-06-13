import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: any = {
    username: null,
    email: null,
    password: null,
    role: []
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  

  constructor(private authService: AuthService) { }

  onCheckboxChange(event: any) {
    const value = event.target.value;
    if (event.target.checked) {
      // Añadir el valor a la lista si está marcado
      this.form.role.push(value);
    } else {
      // Eliminar el valor de la lista si está desmarcado
      this.form.role = this.form.role.filter((item: string) => item !== value);
    }
  }
  onSubmit(): void {

    const { username, email, password, role } = this.form;
    this.authService.register(username, email, password, role).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
