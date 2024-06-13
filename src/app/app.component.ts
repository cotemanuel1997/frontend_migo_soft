import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showUserBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MANAGER');
      this.showUserBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();

    window.location.reload();

    this.router.navigate(['/home']);
  }

  selectNavItem2(event: MouseEvent): void {

    // Obtener todos los elementos de navegación y deseleccionarlos, excepto el elemento actual
    const navItems = document.querySelectorAll('.nav-item1');
    console.log(navItems);
    
    navItems.forEach(item => {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
      
    });
  }

    selectNavItem1(event: MouseEvent): void {

    // Obtener todos los elementos de navegación y deseleccionarlos, excepto el elemento actual
    const navItems = document.querySelectorAll('.nav-item2');
    console.log(navItems);
    
    navItems.forEach(item => {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
      
    });
  }
}
