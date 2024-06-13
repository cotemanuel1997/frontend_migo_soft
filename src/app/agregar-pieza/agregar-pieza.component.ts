import { Component } from '@angular/core';
import { RegistrarPiezaService } from '../_services/registrar-pieza.service';
@Component({
  selector: 'app-agregar-pieza',
  templateUrl: './agregar-pieza.component.html',
  styleUrl: './agregar-pieza.component.css'
})
export class AgregarPiezaComponent {
  form: any = {
    nombre: null,
    materialidad: null,
    taller: null,
    estado: null,
    terminacion: null,
  };
  isSuccessful = false;
  isRegisterFailed = false;
  errorMessage = '';

  constructor(private registrarPiezaService: RegistrarPiezaService) { }

  onSubmit(): void {
    const { nombre, materialidad, taller, estado, terminacion } = this.form;

    this.registrarPiezaService.register(nombre, materialidad, taller, estado, terminacion).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isRegisterFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isRegisterFailed = true;
      }
    });
  }
}
