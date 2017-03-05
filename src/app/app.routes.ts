import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component'

const appRoutes: Routes = [
  { path: 'start', component: StartComponent },
  { path: '**', redirectTo: 'start' }
]

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
