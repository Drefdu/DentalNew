import { TestBed } from '@angular/core/testing';

import { ModalDatosCitaService } from './modal-datos-cita.service';

describe('ModalDatosCitaService', () => {
  let service: ModalDatosCitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalDatosCitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
