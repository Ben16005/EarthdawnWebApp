import { Component } from '@angular/core';
import { Character } from './models/character';
import { OnInit } from '@angular/core';
import { CharacterService } from './services/character.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Earthdawn Character Sheet';
  currentValue: number;
  editMode = false;

  public selectedCharacter = new Character('Suroshi');

  constructor(private _characterService: CharacterService) {}

  ngOnInit() {
    this.loadCharacterInformation();
    this.currentValue = this._characterService.getCurrentCharacter();
  }

  increaseValue() {
    this._characterService.setCurrentCharacter(this.currentValue + 1);
    this.currentValue = this._characterService.getCurrentCharacter();
  }

  loadCharacterInformation() {
    this.selectedCharacter.age = 18;
    this.selectedCharacter.gender = 'M';
    this.selectedCharacter.height = '6\'1"';
    this.selectedCharacter.weight = 170;
    this.selectedCharacter.player = 'Ben';
  }
}
