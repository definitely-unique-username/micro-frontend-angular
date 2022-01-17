import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingSearchComponent } from './booking-search/booking-search.component';

@NgModule({
    imports: [
        CommonModule,
        BookingRoutingModule
    ],
    declarations: [
        BookingSearchComponent
    ]
})
export class BookingModule { }