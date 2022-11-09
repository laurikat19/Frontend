import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasesPage } from './clases.page';

const routes: Routes = [
  {
    path: '',
    component: ClasesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasesPageRoutingModule {}
