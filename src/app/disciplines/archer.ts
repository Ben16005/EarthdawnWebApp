import { Discipline } from '../character/discipline';
import { Talent } from '../character/talent';
import { avoidBlow, directionalArrow, missileWeapons, mysticAim, trueShot, sprint,
throwingWeapons, flameArrow, woundBalance, meleeWeapons, threadWeaving,
firstImpression, stoppingAim, bankShot, speakLanguage, anticipateBlow, callArrow,
impressiveShot, eagleEye} from '../library/disciplineTalents';
import { karmaRitual, durability } from '../library/staticTalents';

export const archer: Discipline = {
    name: 'archer',
    circle: 1,
    talents: [
        karmaRitual,
        new Talent(avoidBlow, 1, true, false),
        new Talent(directionalArrow, 2, true, true),
        new Talent(missileWeapons, 1, true, false),
        new Talent(mysticAim, 1, true, false),
        new Talent(trueShot, 1, false, true),
        durability,
        new Talent(sprint, 2, false, false),
        new Talent(throwingWeapons, 2, true, false),
        new Talent(flameArrow, 3, true, true),
        new Talent(woundBalance, 3, false, false),
        new Talent(meleeWeapons, 4, false, false),
        new Talent(threadWeaving, 4, true, false),
        new Talent(firstImpression, 5, false, false),
        new Talent(stoppingAim, 5, true, true),
        new Talent(bankShot, 6, true, false),
        new Talent(speakLanguage, 6, false, false),
        new Talent(anticipateBlow, 7, false, false),
        new Talent(callArrow, 7, true, false),
        new Talent(impressiveShot, 8, true, false),
        new Talent(eagleEye, 8, true, false)
    ]
};
