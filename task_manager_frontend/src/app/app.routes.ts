import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

/**
 * PUBLIC_INTERFACE
 * App routing: future extension for auth, dashboard, settings.
 * Currently, single dashboard view.
 */
export const routes: Routes = [
  {
    path: '',
    component: AppComponent
    // TODO: Add route guards, auth, nested routes for future panels
  }
];
