import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CharacterService } from './services/character.service';
import { Character } from './models/character';
import { EditModeService } from './services/editmode.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'Earthdawn Character Sheet';
  currentValue: number;
  editMode = false;
  editModeGlobal = false;

  public selectedCharacter = new Character('Suroshi');

  constructor(
    private _characterService: CharacterService,
    private _editMode: EditModeService
  ) {}

  ngOnInit() {
    this.loadCharacterInformation();
    this.currentValue = this._characterService.getCurrentCharacter();
  }

  increaseValue() {
    this._characterService.setCurrentCharacter(this.currentValue + 1);
    this.currentValue = this._characterService.getCurrentCharacter();
  }

  ngOnChanges(changes: SimpleChanges) {
    this._editMode.setEditMode(this.editMode);
    this.editModeGlobal = this._editMode.getEditMode();
  }

  loadCharacterInformation() {
    this.selectedCharacter.age = 18;
    this.selectedCharacter.gender = 'M';
    this.selectedCharacter.height = '6\'1"';
    this.selectedCharacter.weight = 170;
    this.selectedCharacter.player = 'Ben';
  }
}
