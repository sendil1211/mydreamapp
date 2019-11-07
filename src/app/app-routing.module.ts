import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from'./app.component';
import { StudentFormComponent }  from './student-form/student-form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { RegisTrationComponent } from './regis-tration/regis-tration.component';
import { ScoreCardComponent } from './score-card/score-card.component';
import { AnnualEventComponent } from './annual-event/annual-event.component';
import { SchoolHolidaysComponent } from './school-holidays/school-holidays.component';
import { ScoialMediaComponent } from './scoial-media/scoial-media.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



const routes: Routes = [
  
  { path:'',
    component: AppComponent,
    children: [
  { path: 'students', component: StudentFormComponent , pathMatch: 'full' } ,
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'staffdetails', component: StaffDetailsComponent  },
  { path: 'registration', component: RegisTrationComponent  },
  { path: 'scorecard', component: ScoreCardComponent  },
  { path: 'annulaevent', component: AnnualEventComponent  },
  { path: 'schoolholidays', component: SchoolHolidaysComponent  },
  { path: 'socialmedia', component: ScoialMediaComponent  },
  { path: 'contactus', component: ContactUsComponent  },

    ]  
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
