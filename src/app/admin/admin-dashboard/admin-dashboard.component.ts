import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hero } from 'src/app/heroes/hero';
import { SelectivePreloadingStrategyService } from '../../selective-preloading-strategy.service';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  sessionId: Observable<string>;
  token: Observable<string>;
  modules: string[];
  heroes: Hero[];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    preloadStrategy: SelectivePreloadingStrategyService
  ) {
    this.modules = preloadStrategy.preloadedModules;
  }

  ngOnInit() {
    this.sessionId = this.route.queryParamMap.pipe(
      map((params) => params.get('session_id') || 'None')
    );

    this.token = this.route.fragment.pipe(
      map((fragment) => fragment || 'None')
    );

    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
