import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-professional',
  templateUrl: './board-professional.component.html',
  styleUrl: './board-professional.component.css'
})
export class BoardProfessionalComponent {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getProfessionalBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });
  }
}
