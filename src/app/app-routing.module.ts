import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoGamesListComponent } from './video-game/video-games-list/video-games-list.component';
import { SingleVideoGameComponent } from './video-game/single-video-game/single-video-game.component';
import { PlatformsListComponent } from './platform/platforms-list/platforms-list.component';
import { SinglePlatformComponent } from './platform/single-platform/single-platform.component';
import { DevelopersListComponent } from './developer/developers-list/developers-list.component';
import { SingleDeveloperComponent } from './developer/single-developer/single-developer.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';

const routes: Routes = [
  { path: 'authentication/signin', component: SigninComponent },
  { path: 'authentication/signup', component: SignupComponent },
  { path: 'video-games', component: VideoGamesListComponent },
  { path: 'video-games/:slug', component: SingleVideoGameComponent },
  { path: 'platforms', component: PlatformsListComponent },
  { path: 'platforms/:id', component: SinglePlatformComponent },
  { path: 'platforms/:id/:videogame', component: SingleVideoGameComponent },
  { path: 'developers', component: DevelopersListComponent },
  { path: 'developers/:slug', component: SingleDeveloperComponent },
  { path: 'developers/:slug/:videogame', component: SingleVideoGameComponent },
  { path: '', redirectTo: 'video-games', pathMatch: 'full' },
  { path: '**', redirectTo: 'video-games' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
