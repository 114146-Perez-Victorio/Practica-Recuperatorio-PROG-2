import { TestBed } from '@angular/core/testing';

import { ListFacturacionService } from './list-facturacion.service';

describe('ListFacturacionService', () => {
  let service: ListFacturacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListFacturacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
