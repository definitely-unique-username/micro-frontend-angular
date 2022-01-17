import { Component, ViewChild, ViewContainerRef, Injector, ComponentFactoryResolver, OnInit } from '@angular/core';

@Component({
    selector: 'app-booking-search',
    templateUrl: './booking-search.component.html'
})
export class BookingSearchComponent {

    @ViewChild('vc', { read: ViewContainerRef, static: true })
    viewContainer: ViewContainerRef | undefined;

    constructor(
        private injector: Injector,
        private cfr: ComponentFactoryResolver) { }

    search() {
        alert('Not implemented for this demo!');
    }

    async terms() {
        const comp = await import('../lazy/lazy.component').then(m => m.LazyComponent);

        const factory = this.cfr.resolveComponentFactory(comp);
        this.viewContainer?.createComponent(factory, undefined, this.injector);
    }


}