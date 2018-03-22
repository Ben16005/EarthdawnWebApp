import { Discipline } from '../character/discipline';
import { Talent } from '../character/talent';
import { avoidBlow, maneuver, meleeWeapons, taunt, woundBalance } from '../library/disciplineTalents';
import { karmaRitual, durability } from '../library/staticTalents';

export const swordMaster: Discipline = {
    name: 'archer',
    circle: 1,
    talents: [
        karmaRitual,
        new Talent(avoidBlow, 1, true),
        new Talent(maneuver, 1, true),
        new Talent(meleeWeapons, 1, false),
        new Talent(taunt, 1, true),
        new Talent(woundBalance, 1, true),
        durability
    ]
};
