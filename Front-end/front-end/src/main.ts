import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()), provideAnimationsAsync() // Enable fetch API
  ]
});

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
