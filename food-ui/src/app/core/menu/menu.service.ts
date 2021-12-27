import { Injectable } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private mediaObserver: MediaObserver) {
    this.handleChange();
  }

  sideNavVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  sideNavPosition: BehaviorSubject<string> = new BehaviorSubject<string>(
    'side'
  );

  private handleChange() {
    this.mediaObserver
      .asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0])
      )
      .subscribe((change) => {
        this.sideNavVisible.next(change.mqAlias === 'xs' ? false : true);
        this.sideNavPosition.next(change.mqAlias === 'xs' ? 'over' : 'side');
      });
  }

  toggleMenuVisibility() {
    const visible = !this.sideNavVisible.getValue();
    this.sideNavVisible.next(visible);
  }
}
