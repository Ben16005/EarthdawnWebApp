import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { acrobaticStrike, meleeWeapons, swimming, taunt,
    unarmedCombat, avoidBlow, throwingWeapons, airDance, tailDance,
    threadWeavingSpecial, woundBalance, engagingDance, maneuver,
    lizardLeap, swiftKick, lifeCheck, secondWeapon, disarm,
    resistTaunt, eagleEye, impressiveStrike, lionHeart, bodyBlade,
    whirlwind, quickBlade, shieldBeater, bladeJuggle, defense,
    championChallenge, spiritStrike, matrixStrike, multiStrike,
    secondChance, vitalStrike} from '../library/disciplineTalents';


export const tailDancer: Discipline = {
    name: 'Tail Dancer',
    circle: 1,
    talents: [
        new Talent(acrobaticStrike, 1, false),
        karmaRitual,
        new Talent(meleeWeapons, 1, true),
        new Talent(swimming, 1, true),
        new Talent(taunt, 1, false),
        new Talent(unarmedCombat, 1, true),
        new Talent(avoidBlow, 2, false),
        durability,
        new Talent(throwingWeapons, 2, false),
        new Talent(airDance, 3, false),
        new Talent(tailDance, 3, true),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(woundBalance, 4, true),
        new Talent(engagingDance, 5, true),
        new Talent(maneuver, 5, true),
        new Talent(lizardLeap, 6, true),
        new Talent(swiftKick, 6, false),
        new Talent(lifeCheck, 7, false),
        new Talent(secondWeapon, 7, true),
        new Talent(disarm, 8, true),
        new Talent(resistTaunt, 8, false),
        new Talent(eagleEye, 9, false),
        new Talent(impressiveStrike, 9, true),
        new Talent(lionHeart, 9, false),
        new Talent(bodyBlade, 10, true),
        new Talent(whirlwind, 10, false),
        new Talent(quickBlade, 11, false),
        new Talent(shieldBeater, 11, false),
        new Talent(bladeJuggle, 12, false),
        new Talent(defense, 12, true),
        new Talent(championChallenge, 13, true),
        new Talent(spiritStrike, 13, false),
        new Talent(matrixStrike, 14, false),
        new Talent(multiStrike, 14, true),
        new Talent(secondChance, 15, false),
        new Talent(vitalStrike, 15, true)
    ]
};
