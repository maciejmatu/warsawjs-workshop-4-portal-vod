import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { VideosComponent } from './videos/videos.component';
import { VideoProfileComponent } from './video-profile/video-profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  { path: '', component: StartComponent },
  { path: 'filmy/:category/:query', component: VideosComponent },
  { path: 'profil/:ytid', component: VideoProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'zarejestruj', component: RegisterComponent },
  { path: '**', redirectTo: 'start' }
]

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
