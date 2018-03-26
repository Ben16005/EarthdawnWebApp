import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { avoidBlow, maneuver, meleeWeapons, taunt, woundBalance } from '../library/disciplineTalents';
import { karmaRitual, durability } from '../library/staticTalents';

export const swordMaster: Discipline = {
    name: 'swordMaster',
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
