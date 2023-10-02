import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {
  constructor(
  private route: ActivatedRoute,
  private heroService: HeroService,
  private location: Location
) {}
  //@Input()
  selectedHero?: Hero;

  ngOnInit(): void {
  this.getHero();
  }

  getHero(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.heroService.getHero(id)
    .subscribe(hero => {
      if (hero) {
        this.selectedHero = hero;
        }
      }
    );
  }

  save(): void {
    if (this.selectedHero) {
      this.heroService.updateHero(this.selectedHero)
      .subscribe();}
  }

  goBack(): void {
  this.location.back();
}
}


