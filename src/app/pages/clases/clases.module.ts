import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClasesPage } from './clases.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { ClasesPageRoutingModule } from './clases-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ClasesPageRoutingModule
  ],
  declarations: [ClasesPage]
})
export class ClasesPageModule {}
