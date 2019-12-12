import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { StaffRoutingModule } from './staff-routing.module';


@NgModule({
  declarations: [StaffDashboardComponent],
  imports: [
    CommonModule,
    StaffRoutingModule
  ]
})
export class StaffModule { }
