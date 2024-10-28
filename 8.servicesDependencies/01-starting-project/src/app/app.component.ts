import { Component, inject } from '@angular/core';

import { TasksComponent } from './tasks/tasks.component';
import { TasksService } from './tasks/task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [TasksComponent],
})
export class AppComponent {
  // private tasksService = inject(TasksService);
}
