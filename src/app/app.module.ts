import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './body/home/home.component';
import { AboutComponent } from './body/about/about.component';
import { ServicesComponent } from './body/services/services.component';
import { ExploreComponent } from './body/explore/explore.component';
import { ClientportalComponent } from './body/clientportal/clientportal.component';
import { ContactusComponent } from './body/contactus/contactus.component';
import { AboutusComponent } from './body/about/aboutus/aboutus.component';
import { LaboratoryComponent } from './body/services/laboratory/laboratory.component';
import { EnvironmentalmicrobiologyComponent } from './body/services/laboratory/environmentalmicrobiology/environmentalmicrobiology.component';
import { ClinicalmicrobiologyComponent } from './body/services/laboratory/clinicalmicrobiology/clinicalmicrobiology.component';
import { MedicaldevicesComponent } from './body/services/laboratory/medicaldevices/medicaldevices.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs/';
import { EndoscopycssdComponent } from './body/services/laboratory/environmentalmicrobiology/endoscopycssd/endoscopycssd.component';
import { CesctestingComponent } from './body/services/laboratory/environmentalmicrobiology/cesctesting/cesctesting.component';
import { Htm0101partcComponent } from './body/services/laboratory/environmentalmicrobiology/htm0101partc/htm0101partc.component';
import { Htm0101partdComponent } from './body/services/laboratory/environmentalmicrobiology/htm0101partd/htm0101partd.component';
import { PotablewaterservicesComponent } from './body/services/laboratory/environmentalmicrobiology/potablewaterservices/potablewaterservices.component';
import { CleanroomvalidationComponent } from './body/services/laboratory/environmentalmicrobiology/cleanroomvalidation/cleanroomvalidation.component';
import { EnvironmentalmonitoringComponent } from './body/services/laboratory/environmentalmicrobiology/environmentalmonitoring/environmentalmonitoring.component';
import { RenaltestingComponent } from './body/services/laboratory/environmentalmicrobiology/renaltesting/renaltesting.component';
import { TimelineComponent } from './shared/timeline/timeline.component';
import { AcreditationAccreditationComponent } from './body/about/acreditation-accreditation/acreditation-accreditation.component';
import { AccreditationComponent } from './body/about/accreditation/accreditation.component';
import { Covid19Component } from './body/services/covid19/covid19.component';
import { ProductsInnovationComponent } from './body/services/products-innovation/products-innovation.component';
import { ProjectsResearchComponent } from './body/services/projects-research/projects-research.component';
import { TrainingCpdComponent } from './body/services/training-cpd/training-cpd.component';
import { GooglemapComponent } from './shared/googlemap/googlemap.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faFacebookSquare,
  faLinkedin,
  faInstagramSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { OrderformComponent } from './shared/orderform/orderform.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ExploreComponent,
    ClientportalComponent,
    ContactusComponent,
    AboutusComponent,
    LaboratoryComponent,
    EnvironmentalmicrobiologyComponent,
    ClinicalmicrobiologyComponent,
    MedicaldevicesComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    BodyComponent,
    EndoscopycssdComponent,
    CesctestingComponent,
    Htm0101partcComponent,
    Htm0101partdComponent,
    PotablewaterservicesComponent,
    CleanroomvalidationComponent,
    EnvironmentalmonitoringComponent,
    RenaltestingComponent,
    TimelineComponent,
    AcreditationAccreditationComponent,
    AccreditationComponent,
    Covid19Component,
    ProductsInnovationComponent,
    ProjectsResearchComponent,
    TrainingCpdComponent,
    GooglemapComponent,
    OrderformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FontAwesomeModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatCheckboxModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(
      faTwitterSquare,
      faFacebookSquare,
      faLinkedin,
      faInstagramSquare
    );
  }
}
