import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DicesComponent } from './dices/dices.component';

const routes: Routes = [{ path: 'heroes', component: HeroesComponent },
{ path: 'dices', component: DicesComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
