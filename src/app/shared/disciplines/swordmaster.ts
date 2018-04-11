import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { avoidBlow, maneuver, meleeWeapons, taunt, woundBalance, 
    firstImpression, riposte, hearteningLaugh, throwingWeapons, 
    speakLanguage, threadWeavingSpecial, secondWeapon, winningSmile, 
    disarm, engagingBanter, resistTaunt, secondAttack, anticipateBlow, 
    gracefulExit, cobraStrike, impressiveStrike, pin, criticalHit, 
    whirlwind, quickBlade, shieldBeater, defense, lifeCheck, 
    championChallenge, spiritStrike, matrixStrike, multiStrike, 
    etherealWeapon, vitalStrike} from '../library/disciplineTalents';


export const swordmaster: Discipline = {
    name: 'Swordmaster',
    circle: 1,
    talents: [
        new Talent(avoidBlow, 1, true),
        karmaRitual,
        new Talent(maneuver, 1, true),
        new Talent(meleeWeapons, 1, true),
        new Talent(taunt, 1, false),
        new Talent(woundBalance, 1, false),
        durability,  
        new Talent(firstImpression, 2, false),
        new Talent(riposte, 2, true),
        new Talent(hearteningLaugh, 3, false),
        new Talent(throwingWeapons, 3, false),
        new Talent(speakLanguage, 4, false),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(secondWeapon, 5, true),
        new Talent(winningSmile, 5, false),
        new Talent(disarm, 6, true),
        new Talent(engagingBanter, 6, false),
        new Talent(resistTaunt, 7, true),
        new Talent(secondAttack, 7, true),
        new Talent(anticipateBlow, 8, false),  
        new Talent(gracefulExit, 8, false),
        new Talent(cobraStrike, 9, false),
        new Talent(impressiveStrike, 9, true),
        new Talent(pin, 9, true),
        new Talent(criticalHit, 10, true),
        new Talent(whirlwind, 10, true),
        new Talent(quickBlade, 11, false),
        new Talent(shieldBeater, 11, true),
        new Talent(defense, 12, true),
        new Talent(lifeCheck, 12, false),
        new Talent(championChallenge, 13, true),
        new Talent(spiritStrike, 13, false),
        new Talent(matrixStrike, 14, false),  
        new Talent(multiStrike, 14, true),
        new Talent(etherealWeapon, 15, true),
        new Talent(vitalStrike, 15, false)
    ]
};