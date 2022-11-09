import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AsignaturasPage } from './asignaturas.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AsignaturasPageRoutingModule } from './asignaturas-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AsignaturasPageRoutingModule
  ],
  declarations: [AsignaturasPage]
})
export class AsignaturasPageModule {}
