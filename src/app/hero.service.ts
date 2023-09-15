import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { MessageService } from './message.service'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
  this.messageService.add('HeroService: fetched heroes');
  return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
  // For now, assume that a hero with the specified `id` always exists.
  // Error handling will be added in the next step of the tutorial.
  const hero = this.heroes.find(h => h.id === id)!;
  this.messageService.add(`HeroService: fetched hero id=${id}`);
  if (hero) {
      return of(hero);
    }
      return of({ id: 0, name: 'No name' });
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private heroesUrl = 'http://127.0.0.1:8000/heroes/api/heroeslist';  // URL to web api

  public heroes: Hero[]=[];

  constructor(private http: HttpClient, private messageService: MessageService) {
    this.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}

