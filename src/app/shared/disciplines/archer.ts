import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { avoidBlow, directionArrow, missileWeapons, mysticAim, trueShot, sprint,
throwingWeapons, flameArrow, woundBalance, meleeWeapons, threadWeavingSpecial,
firstImpression, stoppingAim, bankShot, speakLanguage, anticipateBlow, callArrow,
impressiveShot, eagleEye} from '../library/disciplineTalents';
import { karmaRitual, durability } from '../library/staticTalents';

export const archer: Discipline = {
    name: 'archer',
    circle: 1,
    talents: [
        karmaRitual,
        new Talent(avoidBlow, 1, true),
        new Talent(directionArrow, 2, true),
        new Talent(missileWeapons, 1, true),
        new Talent(mysticAim, 1, true),
        new Talent(trueShot, 1, false),
        durability,
        new Talent(sprint, 2, false),
        new Talent(throwingWeapons, 2, true),
        new Talent(flameArrow, 3, true),
        new Talent(woundBalance, 3, false),
        new Talent(meleeWeapons, 4, false),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(firstImpression, 5, false),
        new Talent(stoppingAim, 5, true),
        new Talent(bankShot, 6, true),
        new Talent(speakLanguage, 6, false),
        new Talent(anticipateBlow, 7, false),
        new Talent(callArrow, 7, true),
        new Talent(impressiveShot, 8, true),
        new Talent(eagleEye, 8, true)
    ]
};
