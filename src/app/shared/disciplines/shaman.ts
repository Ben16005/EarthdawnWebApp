import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { createFetish, spellcasting, spellFetish, threadWeavingSpecial, 
    astralSight, wildernessSurvival, spiritTalk, fireHeal, spiritHold, 
    summon, empathicSense, willforce, enhancedFetish, lifeSight, 
    safePath, armoredFetish, borrowSense, catsPaw, plantShelter, 
    reshapeObject, animateObject, summoningCircle, bargainwithSummoned, 
    matrixStrike, trueSight, orbitingSpy, sharedFetish, 
    multiWeaving} from '../library/disciplineTalents';


export const shaman: Discipline = {
    name: 'Shaman',
    circle: 1,
    talents: [
        new Talent(createFetish, 1, true),
        karmaRitual,
        new Talent(spellcasting, 1, true),
        new Talent(spellFetish, 1, false),
        new Talent(spellFetish, 1, false),
        new Talent(threadWeavingSpecial, 1, true),
        new Talent(astralSight, 2, true),  
        durability,
        new Talent(spellFetish, 2, false),
        new Talent(wildernessSurvival, 3, true),
        new Talent(spiritTalk, 3, true),
        new Talent(fireHeal, 4, true),
        new Talent(spellFetish, 4, false),
        new Talent(spiritHold, 5, true),
        new Talent(summon, 5, true),
        new Talent(empathicSense, 6, false),
        new Talent(willforce, 6, false),
        new Talent(enhancedFetish, 7, false),
        new Talent(lifeSight, 7, true),
        new Talent(enhancedFetish, 8, false),  
        new Talent(safePath, 8, true),
        new Talent(armoredFetish, 9, false),
        new Talent(borrowSense, 9, true),
        new Talent(catsPaw, 9, false),
        new Talent(plantShelter, 10, true),
        new Talent(reshapeObject, 10, false),
        new Talent(animateObject, 11, true),
        new Talent(summoningCircle, 11, true),
        new Talent(armoredFetish, 12, false),
        new Talent(bargainwithSummoned, 12, true),
        new Talent(matrixStrike, 13, true),
        new Talent(trueSight, 13, true),
        new Talent(orbitingSpy, 14, true),  
        new Talent(sharedFetish, 14, false),
        new Talent(sharedFetish, 15, false),
        new Talent(multiWeaving, 15, false)
    ]
};