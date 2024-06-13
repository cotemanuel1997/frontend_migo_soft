import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPiezaComponent } from './agregar-pieza.component';

describe('AgregarPiezaComponent', () => {
  let component: AgregarPiezaComponent;
  let fixture: ComponentFixture<AgregarPiezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarPiezaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarPiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
