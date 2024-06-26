import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/heroes/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-manage-heroes',
  templateUrl: './manage-heroes.component.html',
  styleUrls: ['./manage-heroes.component.css'],
})
export class ManageHeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
