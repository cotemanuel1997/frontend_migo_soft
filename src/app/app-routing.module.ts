import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardProfessionalComponent } from './board-professional/board-professional.component';
import { BoardManagerComponent } from './board-manager/board-manager.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TokenPasswordComponent } from './token-password/token-password.component';
import { AgregarPiezaComponent } from './agregar-pieza/agregar-pieza.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'man', component: BoardManagerComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'professional', component: BoardProfessionalComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'reset-password', component: ChangePasswordComponent },
  { path: 'token-password', component: TokenPasswordComponent },
  { path: 'agregar-pieza', component: AgregarPiezaComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
