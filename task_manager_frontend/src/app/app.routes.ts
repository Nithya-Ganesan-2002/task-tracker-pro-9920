import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { PlansComponent } from './plans/plans.component';

/**
 * PUBLIC_INTERFACE
 * App routing: Now supports tabs - "Tasks" and "Plans" under 'Tasks' main section.
 * Default route is /tasks, displaying Tasks tab.
 */
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'tasks',
        children: [
          {
            path: '',
            component: TaskListComponent
          },
          {
            path: 'plans',
            component: PlansComponent
          }
        ]
      },
      // You can add more main navigation routes here if desired.
    ]
  }
];
