import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heros: Hero[];
  list: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeros()
    .subscribe(heros => this.heros = heros);
  }

  add(name: string, role: string): void {
    name = name.trim();
    role = role.trim();
    if (!name || !role) { return; }
    this.heroService.addHero({ name, role } as Hero)
      .subscribe(hero => {
        this.heros.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heros = this.heros.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  filterHerosofRole(input: string) {
    //this.heroService.getHeros().subscribe(heros => this.heros = heros);
    return this.heros.filter((hero) => hero.role === input);
  }

}