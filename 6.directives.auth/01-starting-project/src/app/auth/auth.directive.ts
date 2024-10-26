import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' });

  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }
}

// clear() remove all views that have been created and inserted into the container
// createEmbeddedView() takes a TemplateRef as an argument and creates a view (an instance of the template) from it.

// TemplateRef provides a way to access the embedded template defined by <ng-template>.

// ViewContainerRef is a class that provides an API for managing views inside a specific container. It allows you to dynamically add, remove, or manipulate views

// inject() allows you to access a service or dependency directly within a class or function.
// effect() is a function that allows you to run a piece of code whenever a signal or computed signal it depends on changes.
// lias is an option that allows you to specify a custom name for an input property that is different from the actual property name in the component or directive.
