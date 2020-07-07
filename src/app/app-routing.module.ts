import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoGamesListComponent } from './video-game/video-games-list/video-games-list.component';


const routes: Routes = [
  { path: 'video-games', component: VideoGamesListComponent },
  { path: '', redirectTo: 'video-games', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
