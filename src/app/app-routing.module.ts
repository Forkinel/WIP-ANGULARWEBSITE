import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './body/about/about.component';
import { AboutusComponent } from './body/about/aboutus/aboutus.component';
import { AccreditationComponent } from './body/about/accreditation/accreditation.component';
import { ClientportalComponent } from './body/clientportal/clientportal.component';
import { ContactusComponent } from './body/contactus/contactus.component';
import { ExploreComponent } from './body/explore/explore.component';
import { HomeComponent } from './body/home/home.component';
import { CesctestingComponent } from './body/services/laboratory/environmentalmicrobiology/cesctesting/cesctesting.component';
import { CleanroomvalidationComponent } from './body/services/laboratory/environmentalmicrobiology/cleanroomvalidation/cleanroomvalidation.component';
import { EndoscopycssdComponent } from './body/services/laboratory/environmentalmicrobiology/endoscopycssd/endoscopycssd.component';
import { EnvironmentalmonitoringComponent } from './body/services/laboratory/environmentalmicrobiology/environmentalmonitoring/environmentalmonitoring.component';
import { Htm0101partcComponent } from './body/services/laboratory/environmentalmicrobiology/htm0101partc/htm0101partc.component';
import { Htm0101partdComponent } from './body/services/laboratory/environmentalmicrobiology/htm0101partd/htm0101partd.component';
import { PotablewaterservicesComponent } from './body/services/laboratory/environmentalmicrobiology/potablewaterservices/potablewaterservices.component';
import { RenaltestingComponent } from './body/services/laboratory/environmentalmicrobiology/renaltesting/renaltesting.component';
import { ServicesComponent } from './body/services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'clientportal', component: ClientportalComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'endoscopy', component: EndoscopycssdComponent },
  { path: 'cesc', component: CesctestingComponent },
  { path: 'htm0101partc', component: Htm0101partcComponent },
  { path: 'htm0101partd', component: Htm0101partdComponent },
  { path: 'potablewater', component: PotablewaterservicesComponent },
  { path: 'envmonitoring', component: EnvironmentalmonitoringComponent },
  { path: 'renaltesting', component: RenaltestingComponent },
  { path: 'accreditation', component: AccreditationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
