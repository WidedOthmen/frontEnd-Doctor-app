import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
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
import { SideBarComponent } from './side-bar/side-bar.component';
import { AdminGuardGuard } from './admin-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent, canActivate:[AdminGuardGuard] },
  {path: 'patientData/:patientId',component: PatientDataComponent },
  { path: 'formulaire/:patientId', component: FormulaireComponent },
  { path: 'familleTable/:patientId', component: FamilleTableComponent },
  { path: 'observ/:patientId', component: ObserPageComponent },
  { path: 'formulaireFamilleTable/:patientId', component: FormulaireFamilleComponent },
  { path: 'formulaireDashborad', component: FormulaireDashboradComponent },
  { path: 'nfsFormulaire/:patientId', component: NfsFormulaireComponent },
  { path: 'examenFormulaire/:patientId', component: ExamenFormulaireComponent },
  { path: 'bilanAnnuel/:patientId', component: BilanAnnuelComponent },
  { path: 'bilanTrimestriel/:patientId', component: BilanTrimestrielComponent },
  { path: 'bilanSemestriel/:patientId', component: BilanSemestrielComponent },
  { path: 'tableauTransfusionnel/:patientId', component: TableauTransfusionnelComponent },
  { path: 'formulairTransfusionnel/:patientId', component: FormulaireTransfusionnelComponent },
  { path: 'formulairTrimestriel/:patientId', component: FormulaireTrimestrielComponent },
  { path: 'formulairSemestriel/:patientId', component: FormulaireSemestrielComponent },
  { path: 'formulairAnnuel/:patientId', component: FormulaireAnnuelComponent },
  { path: 'observFormulaire/:patientId', component: ObservFormulaireComponent },
  { path: 'login', component:LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'resetPassword', component: ResetPassswordComponent },
  { path: 'changePassword', component: ChangePasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
