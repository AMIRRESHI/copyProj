import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '@appContainers/dashboard/dashboard.component';
import { HeroesComponent } from '@appContainers/heroes/heroes.component';
import { HeroDetailComponent } from '@appContainers/hero-detail/hero-detail.component';
import { HeroesGuard } from '@appGuards/heroes.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [HeroesGuard]
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent,
    canActivate: [HeroesGuard]
  },
  {
    path: 'heroes',
    component: HeroesComponent,
    canActivate: [HeroesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [HeroesGuard]
})
export class AppRoutingModule {}
