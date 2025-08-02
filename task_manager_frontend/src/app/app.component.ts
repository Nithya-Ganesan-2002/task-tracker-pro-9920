import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SidebarComponent,
    HeaderComponent,
    TaskListComponent,
    TaskDetailComponent,
    NgIf,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * Root application component. Houses the main layout:
 * - Sidebar navigation (app-sidebar)
 * - Header with search/profile (app-header)
 * - Main content: Task List (app-task-list) and Task Details (app-task-detail)
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
