import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PublishedConvocatoryComponent } from './published-convocatory/published-convocatory.component'
import { PendingPublishConvocatoryComponent } from './pending-publish-convocatory/pending-publish-convocatory.component'
import { DetailedPhaseComponent } from './phase/detailed-phase/detailed-phase.component'

const routes: Routes = [  
  { path: 'publishedConvocatory/:id',  component: PublishedConvocatoryComponent },
  { path: 'pendingPublishConvocatory/:id',  component: PendingPublishConvocatoryComponent },
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
