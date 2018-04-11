import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { avoidBlow, battleShout, bodyControl, unarmedCombat, 
    unshakableEarth, creatureAnalysis, lifeSight, claySkin, 
    earthBond, elementalTongues, threadWeavingSpecial, steelThought, 
    swiftKick, lifeCheck, tigerSpring, earthSkin, secondAttack, 
    crushingBlow, lionHeart, battleBellow, matrixStrike, 
    spiritStrike, bestialToughness, plantShelter, spotArmorFlaw, 
    vitality, bestialResilience, earthArmor, safePath, stoneSkin, 
    secondChance, vitalStrike, auraArmor, 
    whirlwind} from '../library/disciplineTalents';


export const purifier: Discipline = {
    name: 'Purifier',
    circle: 1,
    talents: [
        new Talent(avoidBlow, 1, false),
        new Talent(battleShout, 1, false),
        new Talent(bodyControl, 1, true),
        karmaRitual,
        new Talent(unarmedCombat, 1, true),
        new Talent(unshakableEarth, 1, true),
        new Talent(creatureAnalysis, 2, true),  
        durability,
        new Talent(lifeSight, 2, true),
        new Talent(claySkin, 3, true),
        new Talent(earthBond, 3, false),
        new Talent(elementalTongues, 4, true),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(steelThought, 5, true),
        new Talent(swiftKick, 5, false),
        new Talent(lifeCheck, 6, true),
        new Talent(tigerSpring, 6, false),
        new Talent(earthSkin, 7, false),
        new Talent(secondAttack, 7, true),
        new Talent(crushingBlow, 8, true),  
        new Talent(lionHeart, 8, true),
        new Talent(battleBellow, 9, false),
        new Talent(matrixStrike, 9, false),
        new Talent(spiritStrike, 9, true),
        new Talent(bestialToughness, 10, false),
        new Talent(plantShelter, 10, true),
        new Talent(spotArmorFlaw, 11, false),
        new Talent(vitality, 11, false),
        new Talent(bestialResilience, 12, false),
        new Talent(earthArmor, 12, true),
        new Talent(safePath, 13, true),
        new Talent(stoneSkin, 13, true),
        new Talent(secondChance, 14, false),  
        new Talent(vitalStrike, 14, false),
        new Talent(auraArmor, 15, false),
        new Talent(whirlwind, 15, false)
    ]
};