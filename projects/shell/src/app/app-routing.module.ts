import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Microfrontend } from './microfrontends/microfrontend.model';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  // {
  //   path: 'flights',
  //   loadChildren: () => loadRemoteModule({
  //     type: 'module',
  //     remoteEntry: 'http:/localhost:3000/remoteEntry.js',
  //     exposedModule: './flights'
  //   }).then((m) => m.FlightsModule)
  // },
  // {
  //   path: 'booking',
  //   loadChildren: () => loadRemoteModule({
  //     type: 'module',
  //     remoteEntry: 'http:/localhost:3001/remoteEntry.js',
  //     exposedModule: './booking'
  //   }).then((m) => m.BookingModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export function buildRoutes(options: Microfrontend[]): Routes {

  const lazyRoutes: Routes = options.map(o => ({
      path: o.routePath,
      loadChildren: () => loadRemoteModule(o).then(m => m[o.ngModuleName])
  }));

  return [...routes, ...lazyRoutes];
}
