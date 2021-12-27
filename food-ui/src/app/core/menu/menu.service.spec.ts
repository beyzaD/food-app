import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MenuItem } from './menu-item.model';
import { MenuService } from './menu.service';

describe('MenuService', () => {
  let ms: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MenuService],
    });

    ms = TestBed.inject(MenuService);
  });

  it('should be created', () => {
    expect(ms).toBeTruthy();
  });
});
