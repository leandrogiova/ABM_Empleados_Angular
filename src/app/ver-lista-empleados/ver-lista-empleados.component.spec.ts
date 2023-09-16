import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerListaEmpleadosComponent } from './ver-lista-empleados.component';

describe('VerListaEmpleadosComponent', () => {
  let component: VerListaEmpleadosComponent;
  let fixture: ComponentFixture<VerListaEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerListaEmpleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerListaEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
