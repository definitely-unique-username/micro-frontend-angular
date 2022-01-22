import { Component, Input, OnChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { PluginOptions } from './plugin';

@Component({
    selector: 'plugin-proxy',
    template: `
        <ng-container #placeHolder></ng-container>
    `
})
export class PluginProxyComponent implements OnChanges {
    @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
    private viewContainer!: ViewContainerRef;

    constructor() { }

    @Input() public options?: PluginOptions;

    async ngOnChanges() {
        this.viewContainer.clear();

        if (this.options) {
            const Component = await loadRemoteModule(this.options)
                .then(m => this.options && m[this.options.componentName]);

            this.viewContainer.createComponent(Component);
        }
    }
}