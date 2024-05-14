import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { provideNativeDateAdapter } from '@angular/material/core';

import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { TableComponent } from './table/table.component';

@NgModule({
    declarations: [
    UserDetailsComponent,
    FilterComponent,
    TableComponent
  ],
    imports: [
        AngularMaterialModule,
        CommonModule,
        FormsModule
    ],
    exports: [
      UserDetailsComponent,
      FilterComponent,
      TableComponent,
      CommonModule,
      FormsModule
    ],
    providers: [
      provideNativeDateAdapter()
    ]
})
export class ComponentsModule {  }