import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'profesores',
        loadChildren: () => import('../profesores/profesores.module').then(m => m.ProfesoresPageModule)
      },
      {
        path: 'clases',
        loadChildren: () => import('../clases/clases.module').then(m => m.ClasesPageModule)
      },
      {
        path: 'asignaturas',
        loadChildren: () => import('../asignaturas/asignaturas.module').then(m => m.AsignaturasPageModule)
      },
      {
        path: '',
        redirectTo: '/pages/tabs/profesores',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/pages/tabs/profesores',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
