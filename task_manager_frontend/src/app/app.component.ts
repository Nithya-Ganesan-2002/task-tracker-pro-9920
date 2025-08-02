import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SidebarComponent,
    HeaderComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * Root application component. Houses the main layout:
 * - Sidebar navigation (app-sidebar)
 * - Header with search/profile (app-header)
 * - Tab navigation and main routed content
 */
export class AppComponent {
  // Placeholder for authentication state
  isAuthenticated = false;

  /** PUBLIC_INTERFACE
   * Simulated authentication check (will be replaced with real auth logic)
   */
  checkAuth(): void {
    // TODO: Hook with real auth
    this.isAuthenticated = true;
  }
}
