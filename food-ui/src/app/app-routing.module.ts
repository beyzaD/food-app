import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { AboutComponent } from './about/about.component';
import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent, canActivate: [MsalGuard] },
  {
    path: 'food',
    loadChildren: () => import('./food/food.module').then((m) => m.FoodModule),
  },
];

//msal
const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: !isIframe ? 'enabled' : 'disabled', // Don't perform initial navigation in iframes
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
