import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EditModeService {

  private editMode = new BehaviorSubject<boolean>(false);
  currentMode = this.editMode.asObservable();

  private ranks = new BehaviorSubject<number>(0);
  currentRanks = this.ranks.asObservable();

  // Change Edit Mode
  changeEditMode(futureMode: boolean) {
    this.editMode.next(futureMode);
  }

  // Increase or Decrease ranks
  changeRanks(futureRanks: number) {
    this.ranks.next(futureRanks);
  }
}
