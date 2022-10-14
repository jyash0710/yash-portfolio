import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BasicInfoComponent } from './views/basic-info/basic-info.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { ResumeComponent } from './views/resume/resume.component';
import { SkillsComponent } from './views/skills/skills.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxSlickJsModule } from 'ngx-slickjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicInfoComponent,
    AboutMeComponent,
    ResumeComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    NgxSlickJsModule.forRoot({
      links: {
        jquery: 'https://code.jquery.com/jquery-3.4.0.min.js',
        slickJs:
          'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
        slickCss:
          'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css',
        slickThemeCss:
          'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css',
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
