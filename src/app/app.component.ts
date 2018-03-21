import { Component } from '@angular/core';
import { Character } from './character/character';
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

    const acc = document.getElementsByClassName('accordion');
    let i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function() {
          this.classList.toggle('active');
          const panel = this.nextElementSibling;
          if (panel.style.display === 'block') {
              panel.style.display = 'none';
          } else {
              panel.style.display = 'block';
          }
      });
    }
  }

  loadCharacterInformation() {
    this.currentCharacter.age = 18;
    this.currentCharacter.gender = 'M';
    this.currentCharacter.height = '6\'1\"';
    this.currentCharacter.weight = 170;
    this.currentCharacter.player = 'Ben';
  }
}
