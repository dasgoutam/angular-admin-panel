import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfilesListComponent } from './user-profiles-list/user-profiles-list.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { UpdatedialogComponent } from './user-profiles-list/updatedialog/updatedialog.component';
import { DeletedialogComponent } from './user-profiles-list/deletedialog/deletedialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { CreatedialogComponent } from './user-profiles-list/createdialog/createdialog.component';

@NgModule({
  declarations: [UserProfilesListComponent, UpdatedialogComponent, DeletedialogComponent, CreatedialogComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    UserProfileRoutingModule
  ],
  exports: [
    UserProfilesListComponent
  ]
})
export class UserProfileModule { }
