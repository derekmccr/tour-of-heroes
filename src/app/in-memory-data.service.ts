import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heros = [
      {id: 1, name: "Tracer", role: "DPS"},
      {id: 2, name: "Reaper", role: "DPS"},
      {id: 3, name: "WidowMaker", role: "DPS"},
      {id: 4, name: "Pharah", role: "DPS"},
      {id: 5, name: "Reinhardt", role: "Tank"},
      {id: 6, name: "Mercy", role: "Support"},
      {id: 7, name: "Tobjorn", role: "DPS"},
      {id: 8, name: "Hanzo", role: "DPS"},
      {id: 9, name: "Winston", role: "Tank"},
      {id: 10, name: "Zenyatta", role: "Support"},
      {id: 11, name: "Bastion", role: "DPS"},
      {id: 12, name: "Symmetra", role: "DPS"},
      {id: 13, name: "Zarya", role: "Tank"},
      {id: 14, name: "McCree", role: "DPS"},
      {id: 15, name: "Soldier: 76", role: "DPS"},
      {id: 16, name: "Lucio", role: "Support"},
      {id: 17, name: "RoadHog", role: "Tank"},
      {id: 18, name: "Junkrat", role: "DPS"},
      {id: 19, name: "D.Va", role: "Tank"},
      {id: 20, name: "Mei", role: "DPS"},
      {id: 21, name: "Genji", role: "DPS"},
      {id: 22, name: "Ana", role: "Support"},
      {id: 23, name: "Sombra", role: "DPS"},
      {id: 24, name: "Orisa", role: "Tank"},
      {id: 25, name: "Doomfist", role: "DPS"},
      {id: 26, name: "Moira", role: "Support"},
      {id: 27, name: "Brigitte", role: "Support"},
      {id: 28, name: "Wrecking Ball", role: "Tank"},
      {id: 29, name: "Ashe", role: "DPS"},
      {id: 30, name: "Baptise", role: "Support"},
      {id: 31, name: "Sigma", role: "Tank"},
    ];
    return {heros};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heros: Hero[]): number {
    return heros.length > 0 ? Math.max(...heros.map(hero => hero.id)) + 1 : 11;
  }
}