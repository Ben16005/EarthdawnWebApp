import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../models/character';
import { Stat } from '../../models/stat';
import { archer } from '../../shared/disciplines/archer';
import { airSailor } from '../../shared/disciplines/airsailor';
import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { illusionist } from '../../shared/disciplines/illusionist';
import { EditModeService } from '../../services/editmode.service';

@Component({
  selector: 'pm-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.css']
})
export class TalentsComponent implements OnInit {
  @Input() selectedCharacter;

  disciplines: Discipline[] = [illusionist, archer, airSailor];

  constructor(private editService: EditModeService) {}

  editMode: boolean;
  ranks: number;
  ngOnInit() {
    this.editService.currentMode.subscribe(
      futureMode => (this.editMode = futureMode)
    );
    this.editService.currentRanks.subscribe(
      futureRanks => (this.ranks = futureRanks)
    );
  }

  increaseTalent(talent: Talent) {
    if (talent.rankSave < 15) {
      talent.rankSave = talent.rankSave + 1;
      this.editService.changeRanks(this.ranks + this.rankCalculation(talent));
    }
  }

  decreaseTalent(talent: Talent) {
    if (talent.rankSave > 0) {
      talent.rankSave = talent.rankSave - 1;
      this.editService.changeRanks(this.ranks - this.rankCalculation(talent));
    }
  }

  // Calculates the ranks given the talent and circle
  rankCalculation(talent: Talent): number {
    let rankCircle = Math.floor((talent.circle - 1) / 4) - 1;

    // Multiple discipline logic will go here

    if (rankCircle === -1) {
      rankCircle = 0;
    }

    let rankTalent = Math.floor((talent.rankSave - 1) / 4);

    if (rankTalent === 0) {
      rankTalent = 1;
    }
    return  rankTalent + rankCircle;
  }

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
