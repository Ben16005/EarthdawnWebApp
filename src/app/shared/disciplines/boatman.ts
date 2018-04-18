import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { avoidBlow, climbing, meleeWeapons, pilotBoat, swimming,
    castNet, throwingWeapons, haggle, woundBalance, threadWeavingSpecial,
    unarmedCombat, acrobaticStrike, evaluate, engagingBanter, speakLanguage,
    hearteningLaugh, secondWeapon, greatLeap, missileWeapons, disarm, lionHeart,
    secondAttack, detectFalsehood, swingAttack, defense, shieldBeater,
    criticalHit, lifeCheck, secondChance, whirlwind, matrixStrike, quickBlade,
    quickShot, vitality} from '../library/disciplineTalents';


export const boatman: Discipline = {
    name: 'Boatman',
    circle: 1,
    talents: [
        new Talent(avoidBlow, 1, false),
        new Talent(climbing, 1, true),
        karmaRitual,
        new Talent(meleeWeapons, 1, true),
        new Talent(pilotBoat, 1, true),
        new Talent(swimming, 1, true),
        new Talent(castNet, 2, true),
        durability,
        new Talent(throwingWeapons, 2, false),
        new Talent(haggle, 3, true),
        new Talent(woundBalance, 3, true),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(unarmedCombat, 4, false),
        new Talent(acrobaticStrike, 5, false),
        new Talent(evaluate, 5, true),
        new Talent(engagingBanter, 6, true),
        new Talent(speakLanguage, 6, false),
        new Talent(hearteningLaugh, 7, false),
        new Talent(secondWeapon, 7, true),
        new Talent(greatLeap, 8, false),
        new Talent(missileWeapons, 8, false),
        new Talent(disarm, 9, false),
        new Talent(lionHeart, 9, true),
        new Talent(secondAttack, 9, false),
        new Talent(detectFalsehood, 10, false),
        new Talent(swingAttack, 10, true),
        new Talent(defense, 11, true),
        new Talent(shieldBeater, 11, false),
        new Talent(criticalHit, 12, false),
        new Talent(lifeCheck, 12, true),
        new Talent(secondChance, 13, true),
        new Talent(whirlwind, 13, false),
        new Talent(matrixStrike, 14, false),
        new Talent(quickBlade, 14, false),
        new Talent(quickShot, 15, false),
        new Talent(vitality, 15, true)
    ]
};
