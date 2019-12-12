import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { StaffModule } from './staff/staff.module';
const routes: Routes = [
  {
    path : 'admin',
    loadChildren: './admin/admin.module#AdminModule'
    //loadchilderen method loads the feature module..'#' is used to append module
  },

  {
    path : 'staff',
    loadChildren: './staff/staff.module#StaffModule'
  },
  {
    //this is an inbuilt path set
  path: '',
  redirectTo: '',
  pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
