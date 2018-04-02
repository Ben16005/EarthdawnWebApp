import { Injectable } from '@angular/core';

@Injectable()
export class EditModeService {
  editMode: boolean;

  // Get Current Character
  getEditMode() {
    return this.editMode;
  }
  // Set Current Character
  setEditMode(newValue: boolean) {
    this.editMode = newValue;
  }
}
