import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { SuccessStoriesComponent } from './components/success-stories/success-stories.component';
import { RequestHelpComponent } from './components/request-help/request-help.component';
import { AboutComponent } from './components/about/about.component';
import { MembersComponent } from './components/members/members.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    GalleryComponent,
    ActivitiesComponent,
    SuccessStoriesComponent,
    RequestHelpComponent,
    AboutComponent,
    MembersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
