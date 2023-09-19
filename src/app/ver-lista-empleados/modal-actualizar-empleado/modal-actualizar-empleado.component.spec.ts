import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalActualizarEmpleadoComponent } from './modal-actualizar-empleado.component';

describe('ModalActualizarEmpleadoComponent', () => {
  let component: ModalActualizarEmpleadoComponent;
  let fixture: ComponentFixture<ModalActualizarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalActualizarEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalActualizarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
