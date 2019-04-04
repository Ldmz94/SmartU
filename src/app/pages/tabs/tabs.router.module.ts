import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
//Esta clase va a tener las rutas de la aplicación, en tab1 se encuentra la ruta agregar/:listaId
//Y en tab2 se encuentra la ruta agregar/:listaId, se utiliza la misma ruta pero esta va a tener diferente
//Información gracias a los componentes usados de Ionic y angular
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          },
          {
            path: 'agregar/:listaId',
            loadChildren: '../agregar/agregar.module#AgregarPageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          },
          {
            path: 'agregar/:listaId',
            loadChildren: '../agregar/agregar.module#AgregarPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
