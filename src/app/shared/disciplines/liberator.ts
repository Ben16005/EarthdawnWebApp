import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { avoidBlow, freedomSearch, lockPicking, shackleShrug, 
    unarmedCombat, freeMind, meleeWeapons, heartofFreedom, 
    shoutofJustice, threadWeavingSpecial, throwingWeapons, anticipateBlow, 
    falseShackles, deadFall, lionSpirit, healSlave, mindBlade, 
    powerMask, secondAttack, hoardBlows, inciteMob, mindArmor, 
    escapeDivination, prisonCall, championChallenge, spotArmorFlaw, 
    impossibleHide, lifeCheck, safePath, secondChance, matrixStrike, 
    vitalStrike, multiStrike, vitality} from '../library/disciplineTalents';


export const liberator: Discipline = {
    name: 'Liberator',
    circle: 1,
    talents: [
        new Talent(avoidBlow, 1, false),
        new Talent(freedomSearch, 1, true),
        karmaRitual,
        new Talent(lockPicking, 1, true),
        new Talent(shackleShrug, 1, true),
        new Talent(unarmedCombat, 1, true),
        durability,  
        new Talent(freeMind, 2, true),
        new Talent(meleeWeapons, 2, true),
        new Talent(heartofFreedom, 3, false),
        new Talent(shoutofJustice, 3, true),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(throwingWeapons, 4, false),
        new Talent(anticipateBlow, 5, false),
        new Talent(falseShackles, 5, true),
        new Talent(deadFall, 6, false),
        new Talent(lionSpirit, 6, false),
        new Talent(healSlave, 7, false),
        new Talent(mindBlade, 7, true),
        new Talent(powerMask, 8, true),  
        new Talent(secondAttack, 8, false),
        new Talent(hoardBlows, 9, true),
        new Talent(inciteMob, 9, false),
        new Talent(mindArmor, 9, true),
        new Talent(escapeDivination, 10, true),
        new Talent(prisonCall, 10, true),
        new Talent(championChallenge, 11, false),
        new Talent(spotArmorFlaw, 11, false),
        new Talent(impossibleHide, 12, false),
        new Talent(lifeCheck, 12, true),
        new Talent(safePath, 13, false),
        new Talent(secondChance, 13, false),
        new Talent(matrixStrike, 14, false),  
        new Talent(vitalStrike, 14, false),
        new Talent(multiStrike, 15, false),
        new Talent(vitality, 15, true)
    ]
};