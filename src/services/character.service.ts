import { Injectable } from '@angular/core';
import { Character } from '../app/models/character';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import * as dbClient from './dbClient';

@Injectable()
export class CharacterService {

  constructor() {
    // This will eventually make some sort of connection to mongo or something.
  }

  loadCharacter(characterId: string): Observable<Character> {
    console.log('load character');
    const character = new Character('Some Name');
    character.id = characterId;
    // Eventually this will fetch from mongo
    // so will need to be an observable
    return Observable.of(character);
  }

}
