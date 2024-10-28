// Dependency Injection: Services are often injected into components (or other services) using Angular's dependency injection (DI) system, making them easy to reuse and test.
// Singleton by Default: When provided at the root level (providedIn: 'root'), a service is a singleton, meaning one instance is shared across the app.

import { inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';
import { LoggingService } from '../logging.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<Task[]>([]);
  private loggingService = inject(LoggingService);

  allTasks = this.tasks;

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
    this.loggingService.log('ADDED TASK ' + taskData.title);
  }

  updateTasksStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
    this.loggingService.log('CHANGED TASK ' + newStatus);
  }
}

// signal<Task[]>: This is an Angular signal holding an array of Task objects.
// The [] initializes the signal with an empty array of Task objects. This is necessary because signals, like any state variable, need an initial value.
