import { NgModule }       from '@angular/core';
import { CommonModule }  from '@angular/common';

import { ModalModule } from '@deliverysolutions/ngx-modialog';

import { InnerRuntimeCompiledComponent }   from './inner-runtime-compiled.component';

@NgModule({
    imports: [
        CommonModule,
        ModalModule
    ],
    declarations: [
        InnerRuntimeCompiledComponent
    ]
})
export class InnerRuntimeCompiledModule {

}
