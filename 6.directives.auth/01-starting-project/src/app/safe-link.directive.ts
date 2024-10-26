import { Directive, ElementRef, inject, input } from '@angular/core';
import { LogDirective } from './log.directive';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
  hostDirectives: [LogDirective],
})
export class SafeLinkDirective {
  queryParam = input('myapp', { alias: 'appSafeLink' });
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
  constructor() {
    console.log('safelinkdirective is active');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app?');
    if (wantsToLeave) {
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href =
        address + '?from' + this.queryParam();
      return;
    }
    event.preventDefault();
  }
}

// selector is a string that defines how a directive or component can be applied to elements in templates, similar to how CSS selectors work, allowing Angular to identify where to apply the directive or component's behavior.  determines which HTML elements the directive should be applied to

// $event is a special variable that represents the DOM event object that triggered an event listener. It works similarly to how event objects work in JavaScript or React. $event contains information

// input allows you to define a reactive input property that can receive values from a parent component while automatically updating the signal value whenever the input changes.

// inject It allows for injecting services or objects directly without having to use the constructor

//ElementRef direct access to the DOM element that the directive or component is applied to.

// <> are used to specify generic types. Generics allow you to define a type

// inject<ElementRef<HTMLAnchorElement>>: The first set of angle brackets is specifying the type that the inject() function will return. Here, it tells TypeScript that inject() will return an ElementRef object that is specifically referencing an HTMLAnchorElement.

// directive is a class that can modify the behavior or appearance of elements in the DOM.
