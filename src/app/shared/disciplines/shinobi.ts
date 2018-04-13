import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { avoidBlow, climbing, silentWalk, meleeWeapons, 
    workThroughTaint, ascension, surpriseStrike, concealWeapon, 
    throwingWeapons, acrobaticStrike, threadWeavingSpecial, riposte, 
    secondThrow, airDance, fastHand, disguiseSelf, resistTaunt, 
    maskTaint, poisonResistance, enhancedMatrix_Illusionist, 
    readandWriteIllusionism, spellcasting, sloughBlame, trueSight, 
    hypnotize, multiThrow, vitalStrike, armoredMatrix_Illusionist, 
    venom, defense, secondChance, willforce} from '../library/disciplineTalents';


export const shinobi: Discipline = {
    name: 'Shinobi',
    circle: 1,
    talents: [
        new Talent(avoidBlow, 1, true),
        new Talent(climbing, 1, false),
        new Talent(silentWalk, 1, true),
        karmaRitual,
        new Talent(meleeWeapons, 1, false),
        new Talent(workThroughTaint, 1, true),
        new Talent(ascension, 2, false),  
        durability,
        new Talent(surpriseStrike, 2, true),
        new Talent(concealWeapon, 3, true),
        new Talent(throwingWeapons, 3, true),
        new Talent(acrobaticStrike, 4, false),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(riposte, 5, true),
        new Talent(secondThrow, 5, true),
        new Talent(airDance, 6, true),
        new Talent(fastHand, 6, false),
        new Talent(disguiseSelf, 7, true),
        new Talent(resistTaunt, 7, false),
        new Talent(maskTaint, 8, true),  
        new Talent(poisonResistance, 8, false),
        new Talent(enhancedMatrix_Illusionist, 9, false),
        new Talent(readandWriteIllusionism, 9, false),
        new Talent(spellcasting, 9, true),
        new Talent(sloughBlame, 10, true),
        new Talent(trueSight, 10, true),
        new Talent(enhancedMatrix_Illusionist, 11, false),
        new Talent(hypnotize, 11, false),
        new Talent(multiThrow, 12, true),
        new Talent(vitalStrike, 12, false),
        new Talent(armoredMatrix_Illusionist, 13, false),
        new Talent(venom, 13, false),
        new Talent(armoredMatrix_Illusionist, 14, false),  
        new Talent(defense, 14, true),
        new Talent(secondChance, 15, true),
        new Talent(willforce, 15, false)
    ]
};