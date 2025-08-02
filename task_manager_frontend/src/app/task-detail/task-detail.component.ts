import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
/**
 * Task Detail component.
 * Displays details for a selected task, allows edit/delete (stubbed).
 */
export class TaskDetailComponent {
  // Placeholder selected task (in real app, get from service or input)
  task = {
    id: 1,
    title: 'Wireframe landing page',
    description: 'Create the initial wireframes for the landing page following Figma mockups.',
    due: '2024-07-01',
    priority: 'High',
    progress: 50,
    status: 'In Progress',
    subtasks: [
      { title: 'Review Figma', complete: true },
      { title: 'Sketch wireframes', complete: false }
    ]
  };

  /** PUBLIC_INTERFACE
   * Stub for marking as complete, deleting, or saving edits.
   */
  completeTask() {}
  deleteTask() {}
  saveEdits() {}
}
