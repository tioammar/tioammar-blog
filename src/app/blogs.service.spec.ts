import { TestBed, inject } from '@angular/core/testing';

import { BlogsServicesService } from './blogs-services.service';

describe('BlogsServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogsServicesService]
    });
  });

  it('should be created', inject([BlogsServicesService], (service: BlogsServicesService) => {
    expect(service).toBeTruthy();
  }));
});
