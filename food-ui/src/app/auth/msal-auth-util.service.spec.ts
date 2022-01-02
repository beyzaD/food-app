import { TestBed } from '@angular/core/testing';
import { MsalAuthUtilService } from './msal-auth-util.service';

describe('AuthService', () => {
  let service: MsalAuthUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsalAuthUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
