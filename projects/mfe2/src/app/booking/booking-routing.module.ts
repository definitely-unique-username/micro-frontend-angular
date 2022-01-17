import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookingSearchComponent } from "./booking-search/booking-search.component";

const routes: Routes = [
    {
        path: 'bookings-search',
        component: BookingSearchComponent
    },
    {
        path: '**',
        redirectTo: 'bookings-search'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookingRoutingModule { }