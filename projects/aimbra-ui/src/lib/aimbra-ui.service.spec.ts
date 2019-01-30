import { TestBed } from '@angular/core/testing';

import { AimbraUiService } from './aimbra-ui.service';

describe('AimbraUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AimbraUiService = TestBed.get(AimbraUiService);
    expect(service).toBeTruthy();
  });
});
