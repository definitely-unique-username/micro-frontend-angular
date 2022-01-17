import { Injectable } from '@angular/core';
import { Microfrontend } from './microfrontend.model';

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<Microfrontend[]> {
        return Promise.resolve([
            {
                // For Loading
                type: 'module',
                remoteEntry: 'http://localhost:3000/remoteEntry.js',
                exposedModule: './flights',

                // For Routing
                displayName: 'Flights',
                routePath: 'flights',
                ngModuleName: 'FlightsModule'
            },
            {
                // For 
                type: 'module',
                remoteEntry: 'http://localhost:3001/remoteEntry.js',
                exposedModule: './booking',

                // For Routing
                displayName: 'Booking',
                routePath: 'booking',
                ngModuleName: 'BookingModule'
            }
        ] as Microfrontend[]);
    }
}