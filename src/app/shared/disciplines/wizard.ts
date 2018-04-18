import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { readandWriteWizardry, spellcasting, spellMatrix_Wizardry,
    threadWeavingSpecial, evidenceAnalysis, arcaneMutterings,
    readandWriteLanguage, astralSight, bookMemory, lipReading,
    willforce, enhancedMatrix_Wizardry, speakLanguage, holdThread,
    itemHistory, resistTaunt, armoredMatrix_Wizardry, matrixStrike,
    rangePattern, lifeCheck, spiritStrike, castingPattern,
    woundTransfer, sharedMatrix_Wizardry, trueSight, multiWeaving,
    effectPattern, } from '../library/disciplineTalents';


export const wizard: Discipline = {
    name: 'Wizard',
    circle: 1,
    talents: [
        karmaRitual,
        new Talent(readandWriteWizardry, 1, true),
        new Talent(spellcasting, 1, true),
        new Talent(spellMatrix_Wizardry, 1, false),
        new Talent(spellMatrix_Wizardry, 1, false),
        new Talent(threadWeavingSpecial, 1, true),
        durability,
        new Talent(evidenceAnalysis, 2, true),
        new Talent(spellMatrix_Wizardry, 2, false),
        new Talent(arcaneMutterings, 3, true),
        new Talent(readandWriteLanguage, 3, true),
        new Talent(astralSight, 4, true),
        new Talent(bookMemory, 4, true),
        new Talent(lipReading, 5, false),
        new Talent(willforce, 5, false),
        new Talent(enhancedMatrix_Wizardry, 6, false),
        new Talent(speakLanguage, 6, true),
        new Talent(holdThread, 7, true),
        new Talent(itemHistory, 7, true),
        new Talent(enhancedMatrix_Wizardry, 8, false),
        new Talent(resistTaunt, 8, false),
        new Talent(armoredMatrix_Wizardry, 9, false),
        new Talent(matrixStrike, 9, true),
        new Talent(rangePattern, 9, true),
        new Talent(lifeCheck, 10, false),
        new Talent(spiritStrike, 10, true),
        new Talent(armoredMatrix_Wizardry, 11, false),
        new Talent(castingPattern, 11, true),
        new Talent(armoredMatrix_Wizardry, 12, false),
        new Talent(woundTransfer, 12, true),
        new Talent(sharedMatrix_Wizardry, 13, false),
        new Talent(trueSight, 13, false),
        new Talent(multiWeaving, 14, true),
        new Talent(sharedMatrix_Wizardry, 14, false),
        new Talent(effectPattern, 15, true),
        new Talent(sharedMatrix_Wizardry, 15, false)
    ]
};
