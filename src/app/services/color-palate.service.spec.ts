import { TestBed } from '@angular/core/testing';

import { ColorPalateService } from './color-palate.service';

describe('ColorPalateService', () => {
  let service: ColorPalateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorPalateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
