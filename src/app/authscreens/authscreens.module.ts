import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthscreensRoutingModule } from './authscreens-routing.module';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthscreensRoutingModule,
    CustomMaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthscreensModule { }
