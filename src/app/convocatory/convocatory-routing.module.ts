import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PublishedConvocatoryComponent } from './published-convocatory/published-convocatory.component'
import { PendingPublishConvocatoryComponent } from './pending-publish-convocatory/pending-publish-convocatory.component'
import { DetailedPhaseComponent } from './phase/detailed-phase/detailed-phase.component'
import { DetailedConvocatoryComponent } from './detailed-convocatory/detailed-convocatory.component'
import { ConvocatoryPendingApprovePhasesComponent } from './convocatory-pending-approve-phases/convocatory-pending-approve-phases.component'

const routes: Routes = [  
  { path: 'convocatory/:id',  component: DetailedConvocatoryComponent },
  { path: 'approveApplicants/:id',  component: ConvocatoryPendingApprovePhasesComponent },
  { path: 'phase/:id',  component: DetailedPhaseComponent }
];

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forChild(routes)
  ],
  exports : [RouterModule],
  declarations: []
})
export class ConvocatoryRoutingModule { }
