import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');
  private placesService = inject(PlacesService);
  // private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.isFetching.set(true);
    const subscribtion = this.placesService.loadAvailablePlaces().subscribe({
      next: (places) => {
        this.places.set(places);
      },
      error: (error: Error) => {
        this.error.set(error.message);
      },
      complete: () => {
        this.isFetching.set(false);
      },
    });

    this.destroyRef.onDestroy(() => {
      subscribtion.unsubscribe();
    });
  }

  onSelectPlace(selectedPlace: Place) {
    const subscribtion = this.placesService
      .addPlaceToUserPlaces(selectedPlace)
      .subscribe({
        next: (resData) => console.log(resData),
      });
    this.destroyRef.onDestroy(() => {
      subscribtion.unsubscribe();
    });
  }
}

// Think of HttpClient as the tool that allows your Angular app to communicate with a backend server:
// inject(HttpClient) is a new way to use dependency injection (DI) without needing to pass HttpClient through a component's constructor.

// MODULES:
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { provideHttpClient } from '@angular/common/http';

// @NgModule({
//   declarations: [
//     AppComponent,
//     PlacesComponent,
//     // ... etc
//   ],
//   imports: [BrowserModule, FormsModule],
//   providers: [provideHttpClient()],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// .get<{ places: Place[] }>('http://localhost:3000/places', {
//   observe: 'response', // events - few times
// })

// The map Operator: Here, map((resData) => resData.places) extracts the places array from the response data.
// set(): Updates the signal’s value reactively. When you call set(), Angular knows the value has changed,
