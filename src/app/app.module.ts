import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { DateUtilService } from './date-util.service';

@NgModule({
    declarations: [
        TimelinesComponent,
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [DateUtilService],    
    bootstrap: [AppComponent]
})
export class AppModule { }
