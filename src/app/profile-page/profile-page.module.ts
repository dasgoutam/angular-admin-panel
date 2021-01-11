import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { ProfilePageRoutingModule } from './profile-page-routing.module';

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    ProfilePageRoutingModule
  ]
})
export class ProfilePageModule { }
