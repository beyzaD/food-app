import { Component } from '@angular/core';
import { of, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Passion for Food!';
  displayAuth$: Observable<boolean>;

  constructor() {
    this.displayAuth$ = of(environment.authEnabled);
  }
}
