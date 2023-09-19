import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEmpleadoEnviadoComponent } from './modal-empleado-enviado.component';

describe('ModalEmpleadoEnviadoComponent', () => {
  let component: ModalEmpleadoEnviadoComponent;
  let fixture: ComponentFixture<ModalEmpleadoEnviadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEmpleadoEnviadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEmpleadoEnviadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
