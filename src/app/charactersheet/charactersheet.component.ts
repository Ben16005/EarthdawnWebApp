import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../models/character';

@Component({
    templateUrl: './charactersheet.component.html',
    styleUrls: ['./charactersheet.component.css']
})
export class CharacterSheetComponent implements OnInit {
    public pageTitle2: string = 'Character Sheet';

// @Input() selectedCharacter: Character;

ngOnInit() {
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
}
