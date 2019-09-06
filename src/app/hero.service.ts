import { Injectable } from '@angular/core';
import { HEROS } from './mock-heros';
import { Hero } from './hero';
import { HerosComponent } from './heros/heros.component';
import { MessageService } from './message.service';

import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeros(): Observable<Hero[]>{
    // TODO: send the message _after_ fetching the heros
    this.messageService.add('HeroService: fetched heros');
    return of(HEROS);
  }
}
