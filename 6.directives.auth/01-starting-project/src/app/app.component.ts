import {
  Component,
  computed,
  inject,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthService } from './auth/auth.service';
import { NgIf } from '@angular/common';
import { AuthDirective } from './auth/auth.directive';
import { LogDirective } from './log.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    AuthComponent,
    LearningResourcesComponent,
    NgIf,
    AuthDirective,
    LogDirective,
  ],
})
export class AppComponent {
  private authService = inject(AuthService);

  isAdmin = computed(() => this.authService.activePermission() === 'admin');
}

// inject - allows you to directly inject services or dependencies into your classes without needing to use the constructor-based dependency injection.

// computed = define a reactive value that automatically recalculates whenever its dependencies change

// TemplateRef provides a way to access the embedded template defined by <ng-template>.
