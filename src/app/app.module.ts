import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VideoGamesListComponent } from './video-game/video-games-list/video-games-list.component';
import { SingleVideoGameComponent } from './video-game/single-video-game/single-video-game.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { SearchVideoGameComponent } from './video-game/search-video-game/search-video-game.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlatformsListComponent } from './platform/platforms-list/platforms-list.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SinglePlatformComponent } from './platform/single-platform/single-platform.component';
import { DevelopersListComponent } from './developer/developers-list/developers-list.component';
import { SingleDeveloperComponent } from './developer/single-developer/single-developer.component';
import { SearchDeveloperComponent } from './developer/search-developer/search-developer.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { ListComponent } from './profile/list/list.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        VideoGamesListComponent,
        SingleVideoGameComponent,
        LoaderComponent,
        SearchVideoGameComponent,
        PlatformsListComponent,
        PaginationComponent,
        SinglePlatformComponent,
        DevelopersListComponent,
        SingleDeveloperComponent,
        SearchDeveloperComponent,
        SignupComponent,
        SigninComponent,
        ListComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
