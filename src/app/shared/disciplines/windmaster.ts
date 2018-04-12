import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { avoidBlow, diveAttack, meleeWeapons, unarmedCombat, 
    woodSkin, anticipateBlow, throwingWeapons, taunt, tigerSpring, 
    buzz, threadWeavingSpecial, detectWeapon, fastGrab, disarm, 
    lifeCheck, earthSkin, secondAttack, momentumAttack, spiritStrike, 
    criticalHit, missileTwister, secondWeapon, impressiveStrike, 
    matrixStrike, spotArmorFlaw, vitality, ascension, gainSurprise, 
    safePath, stoneSkin, secondChance, vitalStrike, auraArmor, 
    whirlwind} from '../library/disciplineTalents';


export const windmaster: Discipline = {
    name: 'Windmaster',
    circle: 1,
    talents: [
        new Talent(avoidBlow, 1, true),
        new Talent(diveAttack, 1, true),
        karmaRitual,
        new Talent(meleeWeapons, 1, true),
        new Talent(unarmedCombat, 1, false),
        new Talent(woodSkin, 1, true),
        new Talent(anticipateBlow, 2, true),  
        durability,
        new Talent(throwingWeapons, 2, false),
        new Talent(taunt, 3, false),
        new Talent(tigerSpring, 3, false),
        new Talent(buzz, 4, true),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(detectWeapon, 5, false),
        new Talent(fastGrab, 5, false),
        new Talent(disarm, 6, false),
        new Talent(lifeCheck, 6, true),
        new Talent(earthSkin, 7, false),
        new Talent(secondAttack, 7, true),
        new Talent(momentumAttack, 8, true),  
        new Talent(spiritStrike, 8, true),
        new Talent(criticalHit, 9, false),
        new Talent(missileTwister, 9, false),
        new Talent(secondWeapon, 9, true),
        new Talent(impressiveStrike, 10, false),
        new Talent(matrixStrike, 10, false),
        new Talent(spotArmorFlaw, 11, true),
        new Talent(vitality, 11, false),
        new Talent(ascension, 12, false),
        new Talent(gainSurprise, 12, true),
        new Talent(safePath, 13, false),
        new Talent(stoneSkin, 13, true),
        new Talent(secondChance, 14, false),  
        new Talent(vitalStrike, 14, false),
        new Talent(auraArmor, 15, false),
        new Talent(whirlwind, 15, true)
    ]
};