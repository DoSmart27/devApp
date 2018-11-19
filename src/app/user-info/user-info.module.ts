import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';

import { RouterModule } from '@angular/router';

import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  imports: [
    CommonModule, RouterModule, DashboardModule
  ],
  declarations: [UserListComponent]
})
export class UserInfoModule { }
