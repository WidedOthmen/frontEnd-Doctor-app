import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import{Ng2SearchPipeModule} from 'ng2-search-filter'
import{Ng2OrderModule} from 'ng2-order-pipe';
import{NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FamilleTableComponent } from './famille-table/famille-table.component';
import { ObserPageComponent } from './obser-page/obser-page.component';
import { FormulaireFamilleComponent } from './formulaire-famille/formulaire-famille.component';
import { FormulaireDashboradComponent } from './formulaire-dashborad/formulaire-dashborad.component';
import { NfsFormulaireComponent } from './nfs-formulaire/nfs-formulaire.component';
import { ExamenFormulaireComponent } from './examen-formulaire/examen-formulaire.component';
import { BilanAnnuelComponent } from './bilan-annuel/bilan-annuel.component';
import { BilanTrimestrielComponent } from './bilan-trimestriel/bilan-trimestriel.component';
import { BilanSemestrielComponent } from './bilan-semestriel/bilan-semestriel.component';
import { TableauTransfusionnelComponent } from './tableau-transfusionnel/tableau-transfusionnel.component';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { FormulaireTransfusionnelComponent } from './formulaire-transfusionnel/formulaire-transfusionnel.component';
import { FormulaireTrimestrielComponent } from './formulaire-trimestriel/formulaire-trimestriel.component';
import { FormulaireSemestrielComponent } from './formulaire-semestriel/formulaire-semestriel.component';
import { FormulaireAnnuelComponent } from './formulaire-annuel/formulaire-annuel.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ObservFormulaireComponent } from './observ-formulaire/observ-formulaire.component';
import { ResetPassswordComponent } from './reset-passsword/reset-passsword.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import{AdminGuardGuard} from './admin-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideBarComponent,
    FooterComponent,
    FormulaireComponent,
    FamilleTableComponent,
    ObserPageComponent,
    FormulaireFamilleComponent,
    FormulaireDashboradComponent,
    NfsFormulaireComponent,
    ExamenFormulaireComponent,
    BilanAnnuelComponent,
    BilanTrimestrielComponent,
    BilanSemestrielComponent,
    TableauTransfusionnelComponent,
    PatientDataComponent,
    FormulaireTransfusionnelComponent,
    FormulaireTrimestrielComponent,
    FormulaireSemestrielComponent,
    FormulaireAnnuelComponent,
    LoginComponent,
    RegisterComponent,
    ObservFormulaireComponent,
    ResetPassswordComponent,
    ChangePasswordComponent,
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [AdminGuardGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
