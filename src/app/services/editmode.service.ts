import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EditModeService {

  private editMode = new BehaviorSubject<boolean>(false);
  currentMode = this.editMode.asObservable();

  // Get Current Character
  changeEditMode(futureMode: boolean) {
    this.editMode.next(futureMode);
  }
}
