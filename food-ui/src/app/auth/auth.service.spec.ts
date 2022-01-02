import { TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment.prod';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true on isAuthenticated when env is configured', () => {
    service
      .isAuthenticated()
      .subscribe((isAuth) => isAuth != environment.authEnabled);
  });
});
