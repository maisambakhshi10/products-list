import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    declarations: [
        ListComponent,
        DetailComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgxPaginationModule
    ],
    exports: [
        ListComponent,
        DetailComponent
    ]
})
export class ProductModule { }
