import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { airDance, avoidBlow, sprint, ascension, unarmedCombat, 
    acrobaticStrike, energizedStrike, defense, swiftKick, 
    threadWeavingSpecial, throwingWeapons, mentalAgility, temperSelf, 
    ironBody, resistTaunt, resilientSpirit, vivacity, astralSight, 
    ironWill, energizedShot, lionHeart, woundBalance, greatLeap, 
    rushingAttack, trapInitiative, vitality, shieldBeater, silentWalk, 
    poisonResistance, weaponBreaker, matrixStrike, vitalStrike, 
    lifeCheck, spiritualDeluge} from '../library/disciplineTalents';


export const enlightenedWarrior: Discipline = {
    name: 'Enlightened Warrior',
    circle: 1,
    talents: [
        new Talent(airDance, 1, false),
        new Talent(avoidBlow, 1, true),
        karmaRitual,
        new Talent(sprint, 1, false),
        new Talent(ascension, 1, false),
        new Talent(unarmedCombat, 1, true),
        new Talent(acrobaticStrike, 2, false),  
        durability,
        new Talent(energizedStrike, 2, true),
        new Talent(defense, 3, true),
        new Talent(swiftKick, 3, false),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(throwingWeapons, 4, false),
        new Talent(mentalAgility, 5, true),
        new Talent(temperSelf, 5, true),
        new Talent(ironBody, 6, true),
        new Talent(resistTaunt, 6, true),
        new Talent(resilientSpirit, 7, true),
        new Talent(vivacity, 7, true),
        new Talent(astralSight, 8, false),  
        new Talent(ironWill, 8, true),
        new Talent(energizedShot, 9, true),
        new Talent(lionHeart, 9, false),
        new Talent(woundBalance, 9, false),
        new Talent(greatLeap, 10, false),
        new Talent(rushingAttack, 10, true),
        new Talent(trapInitiative, 11, false),
        new Talent(vitality, 11, false),
        new Talent(shieldBeater, 12, true),
        new Talent(silentWalk, 12, false),
        new Talent(poisonResistance, 13, false),
        new Talent(weaponBreaker, 13, false),
        new Talent(matrixStrike, 14, false),  
        new Talent(vitalStrike, 14, false),
        new Talent(lifeCheck, 15, false),
        new Talent(spiritualDeluge, 15, true)
    ]
};