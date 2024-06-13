import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { RegistrarPiezaService } from '../_services/registrar-pieza.service';

@Component({
  selector: 'app-board-professional',
  templateUrl: './board-professional.component.html',
  styleUrl: './board-professional.component.css'
})
export class BoardProfessionalComponent {
  content?: string;
  public data: any[] = [];

  constructor(private userService: UserService, private registrarPiezaService: RegistrarPiezaService) { }

  ngOnInit(): void {
    this.userService.getProfessionalBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });

    this.registrarPiezaService.getData().subscribe((response: any[]) => {
      this.data = response;
    });
  }
}
