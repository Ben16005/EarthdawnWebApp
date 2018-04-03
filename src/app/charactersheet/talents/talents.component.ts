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
  ngOnInit() {
    this.editService.currentMode.subscribe(
      futureMode => (this.editMode = futureMode)
    );
  }

  increaseTalent(talent: Talent) {
    talent.rankSave = (talent.rankSave >= 15) ? 15 : talent.rankSave + 1;
  }

  decreaseTalent(talent: Talent) {
    talent.rankSave = (talent.rankSave <= 0) ? 0 : talent.rankSave - 1;
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
