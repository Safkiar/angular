import {
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

// observables - values over time
//  signals - values in a cotainer

//INFORMATION ABOUT NG ON INIT AND INITIAL SUBSCRIBTION

// .subscribe() is a method used to "listen to" or "respond to" an observable.
// Observable in Angular (and RxJS) is a special object that represents a stream of asynchronous events or data over time.
//  DestroyRef as a tool that automatically handles cleanup for you when a component is removed

// ngOnInit(): void {
//   interval(1000).subscribe({
//     next: (cal) => console.log(cal),
//     // trigger for every new value is emmited
//     complete: () => {},
//     // call if observable do not emit new data,
//     error: () => [],

//     this.DestroyRef.onDestroy(() => {
//       subscription.unsubscribe();
//     })
//   });
// }

// BEFORE OPERATORS, INITIALIZATION

// export class AppComponent implements OnInit {
//   private destroyRef = inject(DestroyRef);

//   ngOnInit(): void {
//     const subscription = interval(1000).subscribe({
//       next: (cal) => console.log(cal),
//       // trigger for every new value is emmited
//       complete: () => {},
//       // call if observable do not emit new data,
//       error: () => [],
//     });

//     this.destroyRef.onDestroy(() => {
//       subscription.unsubscribe();
//     });
//   }
// }

// WITH OPERATOR

// export class AppComponent implements OnInit {
//   private destroyRef = inject(DestroyRef);

//   ngOnInit(): void {
//     const subscription = interval(1000)
//       .pipe(map((val) => val * 2))
//       .subscribe({
//         next: (cal) => console.log(cal),
//       });

//     this.destroyRef.onDestroy(() => {
//       subscription.unsubscribe();
//     });
//   }
// }

// signals

// export class AppComponent implements OnInit {
//   private destroyRef = inject(DestroyRef);

//   clickCount = signal(0);

//   constructor() {
//     effect(() => {
//       console.log(`clicked button ${this.clickCount()}`);
//     });
//   }

//   ngOnInit(): void {}

//   onClick() {
//     this.clickCount.update((prevCount) => prevCount + 1);
//   }
// }

// export class AppComponent implements OnInit {
//   private destroyRef = inject(DestroyRef);
//   interval = signal(0);
//   doubleInterval = computed(() => this.interval() * 2);

//   clickCount = signal(0);

//   constructor() {
//     effect(() => {
//       console.log(`clicked button ${this.clickCount()}`);
//     });
//   }

//   ngOnInit(): void {
//     setInterval(() => {
//       this.interval.update((prevIntervalNumber) => prevIntervalNumber + 1);
//     }, 1000);
//   }

//   onClick() {
//     this.clickCount.update((prevCount) => prevCount + 1);
//   }
// }
