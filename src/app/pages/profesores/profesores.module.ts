import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfesoresPage } from './profesores.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { ProfesoresPageRoutingModule } from './profesores-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ProfesoresPageRoutingModule
  ],
  declarations: [ProfesoresPage]
})
export class ProfesoresPageModule {}
