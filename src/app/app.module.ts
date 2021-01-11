import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomMaterialModule } from './custom-material/custom-material.module';
import { AuthscreensModule } from './authscreens/authscreens.module';
import { RolesModule } from './roles/roles.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { ProfilePageModule } from './profile-page/profile-page.module';
import { SharedModule } from './shared/shared.module';
import { UnauthComponent } from './unauth/unauth.component';


@NgModule({
  declarations: [
    AppComponent,
    UnauthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AuthscreensModule,
    RolesModule,
    UserProfileModule,
    ProfilePageModule,
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
