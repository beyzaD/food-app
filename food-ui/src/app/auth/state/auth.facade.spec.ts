import { TestBed } from '@angular/core/testing';
import { MsalAuthFacadeService } from './auth.facade';

describe('AuthService', () => {
  let service: MsalAuthFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsalAuthFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
