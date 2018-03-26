import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../models/character';
import { Stat } from '../../models/stat';
import { archer } from '../../shared/disciplines/archer';
import { airSailor } from '../../shared/disciplines/airsailor';
import { Discipline } from '../../models/discipline';

@Component({
  selector: 'pm-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.css']
})
export class TalentsComponent implements OnInit {
  @Input() selectedCharacter;

  disciplines: Discipline[] = [
      archer, airSailor
  ];

  ngOnInit() {}
}
