import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../models/character';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Observable} from "rxjs/Observable";



@Component({
  selector: 'pm-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character: Observable<Character>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private characterService: CharacterService) { }

  ngOnInit() {
    if (this.route.paramMap) {
      console.log('trying to load character');
      this.getCharacter();
    }
  }

  getCharacter(): void {
    this.character = this.route.paramMap
      .switchMap((params: ParamMap) => this.characterService.loadCharacter(params.get('id')));
  }

}
