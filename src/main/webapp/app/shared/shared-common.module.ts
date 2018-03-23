import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import {
    RfbloyalitySharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        RfbloyalitySharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        RfbloyalitySharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class RfbloyalitySharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
