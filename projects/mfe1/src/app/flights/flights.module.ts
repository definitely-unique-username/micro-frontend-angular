import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlightsSearchComponent } from './flights-search/flights-search.component';

export const routes: Routes = [
    {
      path: 'flights-search',
      component: FlightsSearchComponent
    },
    {
      path: '**',
      redirectTo: 'flights-search'
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    FlightsSearchComponent
  ]
})
export class FlightsModule { }