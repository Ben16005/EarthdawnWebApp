import { Component } from '@angular/core';
import { Character } from './shared/structs/character';
import { OnInit } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Earthdawn Character Sheet';

  public selectedCharacter = new Character('Suroshi');

  ngOnInit() {
    this.loadCharacterInformation();
  }

  loadCharacterInformation() {
    this.selectedCharacter.age = 18;
    this.selectedCharacter.gender = 'M';
    this.selectedCharacter.height = '6\'1\"';
    this.selectedCharacter.weight = 170;
    this.selectedCharacter.player = 'Ben';
  }
}
