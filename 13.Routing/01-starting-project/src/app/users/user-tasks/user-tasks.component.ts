import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { UsersService } from '../users.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
// alternative
export class UserTasksComponent implements OnInit {
  userName = input.required<string>();
  message = input.required<string>();

  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
  // private usersService = inject(UsersService);
  // private activatedRoute = inject(ActivatedRoute);
  // private destroyRef = inject(DestroyRef);

  //   ngOnInit(): void {
  //     const subscription = this.activatedRoute.paramMap.subscribe({
  //       next: (paramMap) => {
  //         this.userName =
  //           this.usersService.users.find((u) => u.id === paramMap.get('userId'))
  //             ?.name || '';
  //       },
  //     });
  //     this.destroyRef.onDestroy(() => subscription.unsubscribe());
  //   }
}

export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const usersService = inject(UsersService);
  const userName =
    usersService.users.find(
      (u) => u.id === activatedRoute.paramMap.get('userId')
    )?.name || '';
  return userName;
};
