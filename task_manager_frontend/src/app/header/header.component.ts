import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
/**
 * App header: search input and user profile avatar.
 */
export class HeaderComponent {
  searchTerm = '';

  /** PUBLIC_INTERFACE
   * Triggered when the user searches tasks.
   * (In a real app, use this.searchTerm or emit an event)
   */
  onSearch() {
    // Placeholder for search handler (to filter tasks)
    // Example: const currentTerm = this.searchTerm;
  }
}
