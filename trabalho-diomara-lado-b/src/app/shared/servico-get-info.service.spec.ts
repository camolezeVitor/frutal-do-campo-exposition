import { TestBed } from '@angular/core/testing';

import { ServicoGetInfoService } from './servico-get-info.service';

describe('ServicoGetInfoService', () => {
  let service: ServicoGetInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoGetInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
