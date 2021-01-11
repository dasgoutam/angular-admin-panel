import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesListComponent } from './roles-list/roles-list.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { RolesRoutingModule } from './roles-routing.module';

@NgModule({
  declarations: [RolesListComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    RolesRoutingModule
  ],
  exports: [
    RolesListComponent
  ]
})

export class RolesModule { }