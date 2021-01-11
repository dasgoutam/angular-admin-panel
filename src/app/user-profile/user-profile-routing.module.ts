import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfilesListComponent } from './user-profiles-list/user-profiles-list.component';

const routes: Routes = [
    {
        path: '',
        component: UserProfilesListComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
