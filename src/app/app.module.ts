import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BasicInfoComponent } from './views/basic-info/basic-info.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { ResumeComponent } from './views/resume/resume.component';
import { SkillsComponent } from './views/skills/skills.component';

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
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
