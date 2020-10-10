import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminComponent,
    HeroDetailComponent,
    ManageHeroesComponent,
    HeroSearchComponent,
  ],
  imports: [CommonModule, FormsModule, AdminRoutingModule],
})
export class AdminModule {}
