import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, nome: 'Dr Nice' },
      { id: 12, nome: 'Narco' },
      { id: 13, nome: 'Bombasto' },
      { id: 14, nome: 'Celeritas' },
      { id: 15, nome: 'Magneta' },
      { id: 16, nome: 'RubberMan' },
      { id: 17, nome: 'Dynama' },
      { id: 18, nome: 'Dr IQ' },
      { id: 19, nome: 'Magma' },
      { id: 20, nome: 'Tornado' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}