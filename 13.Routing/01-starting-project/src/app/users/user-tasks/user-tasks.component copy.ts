// import { Component, computed, inject, input } from '@angular/core';
// import { UsersService } from '../users.service';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-user-tasks',
//   standalone: true,
//   templateUrl: './user-tasks.component.html',
//   styleUrl: './user-tasks.component.css',
// })
// export class UserTasksComponent {
//   userId = input.required<string>();
//   private usersService = inject(UsersService);

//   // alternative
//   private activatedRoute = inject(ActivatedRoute);
//   userName = computed(
//     () => this.usersService.users.find((u) => u.id === this.userId())?.name
//   );
// }
