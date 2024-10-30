import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, { providers: [provideHttpClient()] }).catch(
  (err) => console.error(err)
);

// second argument in bootstrapApplication is used to provide configurations and dependencies when initializing the Angular application.
// providers array is where you register dependencies (like services) that Angular will inject wherever they’re needed in the app.
// provideHttpClient() is specifically used to provide Angular’s HttpClient service. HttpClient is a core Angular service used to make HTTP requests, which is essential for API calls.
