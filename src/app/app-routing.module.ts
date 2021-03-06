import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelinesComponent } from './timelines/timelines.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';

const routes: Routes = [
    {
        path: 'timelines',
        component: TimelinesComponent
    },
    {
        path: 'youtube',
        component: YoutubePlaylistComponent,
        children: [{
            path: ':id',
            component: YoutubePlayerComponent
        }]
    },
    {
        path: 'dictionary',
        component: DictionaryPageComponent,
        children: [
            {
                path: ':key',
                component: DictionaryDetailComponent,
            }
        ]
    }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
