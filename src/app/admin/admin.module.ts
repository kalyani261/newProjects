import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminTaskComponent } from './admin-task/admin-task.component';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [AdminDashboardComponent, AdminTaskComponent],
  imports: [
    CommonModule,
    AdminRoutingModule //putinhg entry of currousponding routing in file.
  ]
})
export class AdminModule { }
