import { TestBed } from '@angular/core/testing';

import { RegistrarPiezaService } from './registrar-pieza.service';

describe('RegistrarPiezaService', () => {
  let service: RegistrarPiezaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarPiezaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
