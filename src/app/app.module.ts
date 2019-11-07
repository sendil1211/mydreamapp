import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { RegisTrationComponent } from './regis-tration/regis-tration.component';
import { ScoreCardComponent } from './score-card/score-card.component';
import { AnnualEventComponent } from './annual-event/annual-event.component';
import { SchoolHolidaysComponent } from './school-holidays/school-holidays.component';
import { ScoialMediaComponent } from './scoial-media/scoial-media.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StaffDetailsService } from './service/staff-details.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    AboutUsComponent,
    StaffDetailsComponent,
    RegisTrationComponent,
    ScoreCardComponent,
    AnnualEventComponent,
    SchoolHolidaysComponent,
    ScoialMediaComponent,
    ContactUsComponent,
    LeftMenuComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ StaffDetailsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
