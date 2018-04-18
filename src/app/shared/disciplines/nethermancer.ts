import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { readandWriteNethermancy, spellcasting, spellMatrix_Nethermancy,
    threadWeavingSpecial, astralSight, frighten, spiritTalk,
    animalPossession, spiritHold, summon, lifeSight, willforce,
    enhancedMatrix_Nethermancy, spiritDodge, orbitingSpy, arcaneMutterings,
    armoredMatrix_Nethermancy, astralPocket, animateObject,
    summoningCircle, bargainwithSummoned, matrixStrike, netherwalk,
    crystalSpellLock, sharedMatrix_Nethermancy, detectInfluence,
    multiWeaving, soulShatter} from '../library/disciplineTalents';


export const nethermancer: Discipline = {
    name: 'Nethermancer',
    circle: 1,
    talents: [
        karmaRitual,
        new Talent(readandWriteNethermancy, 1, true),
        new Talent(spellcasting, 1, true),
        new Talent(spellMatrix_Nethermancy, 1, false),
        new Talent(spellMatrix_Nethermancy, 1, false),
        new Talent(threadWeavingSpecial, 1, true),
        new Talent(astralSight, 2, true),
        durability,
        new Talent(frighten, 2, false),
        new Talent(spellMatrix_Nethermancy, 3, false),
        new Talent(spiritTalk, 3, true),
        new Talent(animalPossession, 4, false),
        new Talent(spellMatrix_Nethermancy, 4, false),
        new Talent(spiritHold, 5, true),
        new Talent(summon, 5, true),
        new Talent(lifeSight, 6, true),
        new Talent(willforce, 6, false),
        new Talent(enhancedMatrix_Nethermancy, 7, false),
        new Talent(spiritDodge, 7, true),
        new Talent(enhancedMatrix_Nethermancy, 8, false),
        new Talent(orbitingSpy, 8, true),
        new Talent(arcaneMutterings, 9, false),
        new Talent(armoredMatrix_Nethermancy, 9, false),
        new Talent(astralPocket, 9, true),
        new Talent(animateObject, 10, false),
        new Talent(summoningCircle, 10, true),
        new Talent(armoredMatrix_Nethermancy, 11, false),
        new Talent(bargainwithSummoned, 11, true),
        new Talent(matrixStrike, 12, true),
        new Talent(netherwalk, 12, true),
        new Talent(crystalSpellLock, 13, true),
        new Talent(sharedMatrix_Nethermancy, 13, false),
        new Talent(detectInfluence, 14, true),
        new Talent(multiWeaving, 14, true),
        new Talent(sharedMatrix_Nethermancy, 15, false),
        new Talent(soulShatter, 15, true)
    ]
};
