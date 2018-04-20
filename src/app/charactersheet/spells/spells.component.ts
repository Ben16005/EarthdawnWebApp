import { Component } from '@angular/core';
import { Spells } from '../../models/spells';

@Component({
    selector: 'pm-spells',
    templateUrl: './spells.component.html',
    styleUrls: ['./spells.component.css']
  })

  export class SpellsComponent {
    spellList: Spells[] =
      [{ name: 'Fireball', description: 'Shoots a big ball of fire', effect: 'WILLPOWER + 5', circle: 1 },
      { name: 'Lightning', description: 'Shoots a big bolt of lightning', effect: 'PERCEPTION + 5', circle: 1 }
    ];
  }
