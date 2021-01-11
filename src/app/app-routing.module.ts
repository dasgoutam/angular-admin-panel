import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesListComponent } from './roles/roles-list/roles-list.component';
import { ProfilePageComponent } from './profile-page/profile-page/profile-page.component';
import { LoginComponent } from './authscreens/login/login.component';
import { UserProfilesListComponent } from './user-profile/user-profiles-list/user-profiles-list.component';
import { UnauthComponent } from './unauth/unauth.component';
import { 
  AuthGuardService as AuthGuard 
} from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ProfilePageComponent,
    canActivate: [AuthGuard],
    data: { roles: ['admin', 'nonadmin']}
  },
  {
    path: 'login',
    loadChildren: () => import('./authscreens/authscreens.module').then(m => m.AuthscreensModule),
    data: { roles: ['admin', 'nonadmin']}
    },
  {
    path: 'profile',
    component: ProfilePageComponent,
    data: { roles: ['admin', 'nonadmin']}
    },
  {
    path: 'user-list',
    loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfileModule),
    canActivate: [AuthGuard],
    data: { roles: ['admin']}
  },
  {
    path: 'roles',
    loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule),
    canActivate: [AuthGuard] ,
    data: { roles: ['admin']}
  },
  {
    path: 'unauth',
    component: UnauthComponent
  },
  {
    path: '**',
    component: ProfilePageComponent,
    canActivate: [AuthGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
