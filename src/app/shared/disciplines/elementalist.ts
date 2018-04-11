import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { readandWriteElementalism, spellcasting, spellMatrix_Elementalist, 
    threadWeavingSpecial, fireHeal, airSpeaking, elementalTongues, astralSight, 
    elementalHold, summon, coldPurify, willforce, enhancedMatrix_Elementalist, 
    unshakableEarth, temperature, armoredMatrix_Elementalist, metalWard, 
    safePath, plantShelter, reshapeObject, animateObject, summoningCircle, 
    bargainwithSummoned, movingEarth, waterDancing, earthArmor, 
    sharedMatrix_Elementalist, holdThread, } from '../library/disciplineTalents';


export const elementalist: Discipline = {
    name: 'Elementalist',
    circle: 1,
    talents: [
        karmaRitual,
        new Talent(readandWriteElementalism, 1, true),
        new Talent(spellcasting, 1, true),
        new Talent(spellMatrix_Elementalist, 1, false),
        new Talent(spellMatrix_Elementalist, 1, false),
        new Talent(threadWeavingSpecial, 1, true),
        durability,  
        new Talent(fireHeal, 2, true),
        new Talent(spellMatrix_Elementalist, 2, false),
        new Talent(airSpeaking, 3, true),
        new Talent(elementalTongues, 3, true),
        new Talent(astralSight, 4, false),
        new Talent(spellMatrix_Elementalist, 4, false),
        new Talent(elementalHold, 5, true),
        new Talent(summon, 5, true),
        new Talent(coldPurify, 6, true),
        new Talent(willforce, 6, false),
        new Talent(enhancedMatrix_Elementalist, 7, false),
        new Talent(unshakableEarth, 7, false),
        new Talent(enhancedMatrix_Elementalist, 8, false),  
        new Talent(temperature, 8, true),
        new Talent(armoredMatrix_Elementalist, 9, false),
        new Talent(metalWard, 9, true),
        new Talent(safePath, 9, true),
        new Talent(plantShelter, 10, true),
        new Talent(reshapeObject, 10, true),
        new Talent(animateObject, 11, false),
        new Talent(summoningCircle, 11, true),
        new Talent(armoredMatrix_Elementalist, 12, false),
        new Talent(bargainwithSummoned, 12, true),
        new Talent(movingEarth, 13, true),
        new Talent(waterDancing, 13, true),
        new Talent(earthArmor, 14, true),  
        new Talent(sharedMatrix_Elementalist, 14, false),
        new Talent(holdThread, 15, false),
        new Talent(sharedMatrix_Elementalist, 15, false)
	]
};