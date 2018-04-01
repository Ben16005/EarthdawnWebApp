import { Injectable } from '@angular/core';

@Injectable()
export class CharacterService {

    editModeAwesome = 0;

    // Get Current Character
    getCurrentCharacter() {
        return this.editModeAwesome;
    }
    // Set Current Character
    setCurrentCharacter(newValue: number) {
        this.editModeAwesome = newValue;
    }
}
