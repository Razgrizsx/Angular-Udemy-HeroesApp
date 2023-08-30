import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';

const routes :Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {
        path: 'agregar',
        component: AgregarComponent
      },
      {
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path: 'listado',
        component: ListadoComponent
      },
      {
        path: 'editar/:id',
        component: AgregarComponent
      },
      {
        path: ':id',
        component: HeroeComponent
      },
      {
        path: '**',
        redirectTo: 'listado'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HeroesRoutingModule { }
