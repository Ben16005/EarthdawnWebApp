import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { airSailing, avoidBlow, battleShout, fireblood, meleeWeapons,
    greatLeap, shieldCharge, unarmedCombat, windCatcher, swiftKick,
    threadWeavingSpecial, battleBellow, haggle, momentumAttack,
    steelyStare, speakLanguage, throwingWeapons, crushingBlow,
    missileWeapons, endureCold, lionHeart, secondAttack, shieldBeater,
    thunderAxe, defense, weaponBreaker, criticalHit, vitality,
    matrixStrike, quickBlade, howl, quickShot, screamingArrow,
    stoneSkin} from '../library/disciplineTalents';


export const skyRaider: Discipline = {
    name: 'Sky Raider',
    circle: 1,
    talents: [
        new Talent(airSailing, 1, true),
        new Talent(avoidBlow, 1, false),
        new Talent(battleShout, 1, true),
        new Talent(fireblood, 1, true),
        karmaRitual,
        new Talent(meleeWeapons, 1, true),
        durability,
        new Talent(greatLeap, 2, true),
        new Talent(shieldCharge, 2, true),
        new Talent(unarmedCombat, 3, false),
        new Talent(windCatcher, 3, true),
        new Talent(swiftKick, 4, false),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(battleBellow, 5, true),
        new Talent(haggle, 5, false),
        new Talent(momentumAttack, 6, true),
        new Talent(steelyStare, 6, true),
        new Talent(speakLanguage, 7, false),
        new Talent(throwingWeapons, 7, false),
        new Talent(crushingBlow, 8, true),
        new Talent(missileWeapons, 8, false),
        new Talent(endureCold, 9, true),
        new Talent(lionHeart, 9, true),
        new Talent(secondAttack, 9, true),
        new Talent(shieldBeater, 10, false),
        new Talent(thunderAxe, 10, true),
        new Talent(defense, 11, false),
        new Talent(weaponBreaker, 11, true),
        new Talent(criticalHit, 12, false),
        new Talent(vitality, 12, false),
        new Talent(matrixStrike, 13, false),
        new Talent(quickBlade, 13, false),
        new Talent(howl, 14, false),
        new Talent(quickShot, 14, false),
        new Talent(screamingArrow, 15, false),
        new Talent(stoneSkin, 15, true)
    ]
};
