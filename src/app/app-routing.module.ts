import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoGamesListComponent } from './video-game/video-games-list/video-games-list.component';
import { SingleVideoGameComponent } from './video-game/single-video-game/single-video-game.component';
import { PlatformsListComponent } from './platform/platforms-list/platforms-list.component';
import { SinglePlatformComponent } from './platform/single-platform/single-platform.component';
import { DevelopersListComponent } from './developer/developers-list/developers-list.component';


const routes: Routes = [
  { path: 'video-games', component: VideoGamesListComponent },
  { path: 'video-games/:slug', component: SingleVideoGameComponent },
  { path: 'platforms', component: PlatformsListComponent },
  { path: 'platforms/:slug', component: SinglePlatformComponent },
  { path: 'developers', component: DevelopersListComponent },
  { path: '', redirectTo: 'video-games', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
