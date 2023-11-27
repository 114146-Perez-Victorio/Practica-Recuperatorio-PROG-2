import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetalleFacturaComponent } from './add-detalle-factura.component';

describe('AddDetalleFacturaComponent', () => {
  let component: AddDetalleFacturaComponent;
  let fixture: ComponentFixture<AddDetalleFacturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDetalleFacturaComponent]
    });
    fixture = TestBed.createComponent(AddDetalleFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
