import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'accueil', loadChildren: './accueil/accueil.module#AccueilPageModule' },
  { path: 'presentateur', loadChildren: './presentateur/presentateur.module#PresentateurPageModule' },
  { path: 'session', loadChildren: './session/session.module#SessionPageModule' },
  { path: 'details-session/:id', loadChildren: './details-session/details-session.module#DetailsSessionPageModule' },
  { path: 'details-presentateur/:id', loadChildren: './details-presentateurs/details-presentateurs.module#DetailsPresentateursPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
