import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DicesComponent } from './dices/dices.component';

const routes: Routes = [{ path: 'heroes', component: HeroesComponent },
{ path: 'dices', component: DicesComponent },
{ path: 'detail/:id', component: HeroDetailComponent },
{ path: '', redirectTo: '/heroes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
