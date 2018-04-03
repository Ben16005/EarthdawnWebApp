import { Component, OnInit } from '@angular/core';
import { CharacterService } from './services/character.service';
import { Character } from './models/character';
import { EditModeService } from './services/editmode.service';

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

  constructor(
    private characterService: CharacterService,
    private editService: EditModeService
  ) {}

  ngOnInit() {
    this.loadCharacterInformation();
    this.currentValue = this.characterService.getCurrentCharacter();
  }

  increaseValue() {
    this.characterService.setCurrentCharacter(this.currentValue + 1);
    this.currentValue = this.characterService.getCurrentCharacter();
  }

  update(value) {
    this.editService.changeEditMode(value);
  }

  loadCharacterInformation() {
    this.selectedCharacter.age = 18;
    this.selectedCharacter.gender = 'M';
    this.selectedCharacter.height = '6\'1"';
    this.selectedCharacter.weight = 170;
    this.selectedCharacter.player = 'Ben';
  }
}
