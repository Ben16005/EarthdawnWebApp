import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { acrobaticStrike, airDance, meleeWeapons, unarmedCombat, 
    woodSkin, anticipateBlow, throwingWeapons, avoidBlow, tigerSpring, 
    downStrike, threadWeavingSpecial, glidingStride, swiftKick, 
    lifeCheck, missileWeapons, earthSkin, secondAttack, cobraStrike, 
    spiritStrike, impressiveStrike, missileTwister, secondWeapon, 
    bodyBlade, matrixStrike, ascension, vitality, spotArmorFlaw, 
    unmount, safePath, stoneSkin, secondChance, vitalStrike, 
    auraArmor, multiStrike} from '../library/disciplineTalents';


export const warrior: Discipline = {
    name: 'Warrior',
    circle: 1,
    talents: [
        new Talent(acrobaticStrike, 1, false),
        new Talent(airDance, 1, false),
        karmaRitual,
        new Talent(meleeWeapons, 1, true),
        new Talent(unarmedCombat, 1, true),
        new Talent(woodSkin, 1, true),
        new Talent(anticipateBlow, 2, true),  
        durability,
        new Talent(throwingWeapons, 2, false),
        new Talent(avoidBlow, 3, true),
        new Talent(tigerSpring, 3, false),
        new Talent(downStrike, 4, true),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(glidingStride, 5, false),
        new Talent(swiftKick, 5, false),
        new Talent(lifeCheck, 6, true),
        new Talent(missileWeapons, 6, false),
        new Talent(earthSkin, 7, false),
        new Talent(secondAttack, 7, false),
        new Talent(cobraStrike, 8, true),  
        new Talent(spiritStrike, 8, true),
        new Talent(impressiveStrike, 9, true),
        new Talent(missileTwister, 9, false),
        new Talent(secondWeapon, 9, true),
        new Talent(bodyBlade, 10, true),
        new Talent(matrixStrike, 10, false),
        new Talent(ascension, 11, false),
        new Talent(vitality, 11, false),
        new Talent(spotArmorFlaw, 12, false),
        new Talent(unmount, 12, true),
        new Talent(safePath, 13, false),
        new Talent(stoneSkin, 13, true),
        new Talent(secondChance, 14, false),  
        new Talent(vitalStrike, 14, false),
        new Talent(auraArmor, 15, false),
        new Talent(multiStrike, 15, true)
    ]
};