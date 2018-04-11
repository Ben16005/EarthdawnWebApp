import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { avoidBlow, battleShout, meleeWeapons, unarmedCombat, 
    woodSkin, anticipateBlow, shieldCharge, throwingWeapons, 
    tigerSpring, downStrike, threadWeavingSpecial, fireblood, greatLeap, 
    lifeCheck, taunt, earthSkin, steelyStare, resistTaunt, 
    secondAttack, battleBellow, lionHeart, missileTwister , bodyBlade, 
    matrixStrike, spotArmorFlaw, vitality, chameleon, weaponBreaker, 
    safePath, stoneSkin, secondChance, vitalStrike, auraArmor, 
    multiStrike} from '../library/disciplineTalents';


export const outcastWarrior: Discipline = {
    name: 'Outcast Warrior',
    circle: 1,
    talents: [
        new Talent(avoidBlow, 1, true),
        new Talent(battleShout, 1, false),
        karmaRitual,
        new Talent(meleeWeapons, 1, true),
        new Talent(unarmedCombat, 1, true),
        new Talent(woodSkin, 1, false),
        new Talent(anticipateBlow, 2, true),  
        durability,
        new Talent(shieldCharge, 2, true),
        new Talent(throwingWeapons, 3, false),
        new Talent(tigerSpring, 3, false),
        new Talent(downStrike, 4, true),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(fireblood, 5, true),
        new Talent(greatLeap, 5, false),
        new Talent(lifeCheck, 6, true),
        new Talent(taunt, 6, false),
        new Talent(earthSkin, 7, false),
        new Talent(steelyStare, 7, false),
        new Talent(resistTaunt, 8, false),  
        new Talent(secondAttack, 8, false),
        new Talent(battleBellow, 9, false),
        new Talent(lionHeart, 9, true),
        new Talent(missileTwister, 9, false),
        new Talent(bodyBlade, 10, true),
        new Talent(matrixStrike, 10, false),
        new Talent(spotArmorFlaw, 11, false),
        new Talent(vitality, 11, false),
        new Talent(chameleon, 12, false),
        new Talent(weaponBreaker, 12, true),
        new Talent(safePath, 13, false),
        new Talent(stoneSkin, 13, true),
        new Talent(secondChance, 14, false),  
        new Talent(vitalStrike, 14, false),
        new Talent(auraArmor, 15, false),
        new Talent(multiStrike, 15, true)
    ]
};