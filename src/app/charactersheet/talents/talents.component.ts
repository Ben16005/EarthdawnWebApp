import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../models/character';
import { Stat } from '../../models/stat';
import { archer } from '../../shared/disciplines/archer';
import { airSailor } from '../../shared/disciplines/airsailor';
import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { illusionist } from '../../shared/disciplines/illusionist';

@Component({
  selector: 'pm-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.css']
})
export class TalentsComponent implements OnInit {
  @Input() selectedCharacter;

  disciplines: Discipline[] = [illusionist, archer, airSailor];

  ngOnInit() {}

  getKarma(talent: Talent) {
    if (talent.discipline) {
      return 'D';
    } else if (talent.karma) {
      return 'K';
    } else {
      return 'N';
    }
  }
}
