import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component'; // Adjust the path if necessary
import { StoriesComponent } from './stories.component'; // Make sure this exists

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'stories', component: StoriesComponent },
];

export default routes;
