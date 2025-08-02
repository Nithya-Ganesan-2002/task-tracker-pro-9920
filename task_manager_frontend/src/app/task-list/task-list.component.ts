import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
/**
 * Task List component.
 * Shows user's tasks, can filter and select one to view/edit in detail.
 */
export class TaskListComponent {
  // Dummy placeholder tasks
  tasks = [
    { id: 1, title: 'Wireframe landing page', due: '2024-07-01', priority: 'High', progress: 50 },
    { id: 2, title: 'Update docs', due: '2024-07-04', priority: 'Medium', progress: 0 },
    { id: 3, title: 'Interview QA candidates', due: '2024-07-03', priority: 'Low', progress: 100 }
  ];
  selectedTaskId: number | null = 1;

  /** PUBLIC_INTERFACE
   * Select a task for detail view.
   */
  selectTask(id: number) { this.selectedTaskId = id; }

  /** PUBLIC_INTERFACE
   * Stub for filtering tasks, would use search/filter params in a real app.
   */
  filterTasks() { /* placeholder */ }
}
