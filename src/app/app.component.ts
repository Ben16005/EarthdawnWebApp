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

  currentCharacter = new Character('Suroshi');

  ngOnInit() {
    this.loadCharacterInformation();
  }

  loadCharacterInformation() {
    this.currentCharacter.age = 18;
    this.currentCharacter.gender = 'M';
    this.currentCharacter.height = '6\'1\"';
    this.currentCharacter.weight = 170;
    this.currentCharacter.player = 'Ben';
  }
}
