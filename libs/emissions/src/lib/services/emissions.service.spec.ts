/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { EmissionsService } from './emissions.service';

describe('Service: Emissions.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmissionsService],
    });
  });

  it('should ...', inject([EmissionsService], (service: EmissionsService) => {
    expect(service).toBeTruthy();
  }));
});
