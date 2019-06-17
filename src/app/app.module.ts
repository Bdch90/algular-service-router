import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { DateUtilService } from './date-util.service';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { HomeComponent } from './home/home.component';
import { LoginStep1Component } from './login-step1/login-step1.component';
import { LoginStep2Component } from './login-step2/login-step2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        TimelinesComponent,
        AppComponent,
        YoutubePlaylistComponent,
        YoutubePlayerComponent,
        DictionaryComponent,
        DictionaryDetailComponent,
        DictionaryPageComponent,
        HomeComponent,
        LoginStep1Component,
        LoginStep2Component
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [DateUtilService],
    bootstrap: [AppComponent]
})
export class AppModule { }
