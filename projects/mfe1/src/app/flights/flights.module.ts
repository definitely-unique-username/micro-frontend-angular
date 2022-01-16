import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlightsSearchComponent } from './flights-search/flights-search.component';
// import { AuthLibModule } from 'auth-lib';
// import { SharedLibModule } from 'shared-lib';

export const routes: Routes = [
    {
      path: 'flights-search',
      component: FlightsSearchComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
    // AuthLibModule,
    // SharedLibModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    FlightsSearchComponent
  ]
})
export class FlightsModule { }