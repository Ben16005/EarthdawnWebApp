import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { animalBond, avoidBlow, charge, meleeWeapons, trickRiding, 
    bloodShare, empathicCommand, spiritMount, wheelingAttack, 
    resistTaunt, threadWeavingSpecial, sureMount, wheelingDefense, 
    dominateBeast, durabilityMount, lastingImpression, missileWeapons, 
    fearsomeCharge, trample, callMount, downStrike, rally, armorMount, 
    championChallenge, healAnimalServant, tameMount, frightenAnimals, 
    momentumAttack, lifeCheck, shieldBeater, mountAttack, spotArmorFlaw, 
    etherealWeapon, multiCharge} from '../library/disciplineTalents';


export const calvaryman: Discipline = {
    name: 'Calvaryman',
    circle: 1,
    talents: [
        new Talent(animalBond, 1, false),
        new Talent(avoidBlow, 1, false),
        new Talent(charge, 1, true),
        karmaRitual,
        new Talent(meleeWeapons, 1, false),
        new Talent(trickRiding, 1, true),
        new Talent(bloodShare, 2, true),  
        durability,
        new Talent(empathicCommand, 2, true),
        new Talent(spiritMount, 3, true),
        new Talent(wheelingAttack, 3, false),
        new Talent(resistTaunt, 4, true),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(sureMount, 5, true),
        new Talent(wheelingDefense, 5, true),
        new Talent(dominateBeast, 6, false),
        new Talent(durabilityMount, 6, false),
        new Talent(lastingImpression, 7, false),
        new Talent(missileWeapons, 7, false),
        new Talent(fearsomeCharge, 8, true),  
        new Talent(trample, 8, true),
        new Talent(callMount, 9, false),
        new Talent(downStrike, 9, false),
        new Talent(rally, 9, true),
        new Talent(armorMount, 10, false),
        new Talent(championChallenge, 10, false),
        new Talent(healAnimalServant, 11, true),
        new Talent(tameMount, 11, false),
        new Talent(frightenAnimals, 12, true),
        new Talent(momentumAttack, 12, false),
        new Talent(lifeCheck, 13, false),
        new Talent(shieldBeater, 13, true),
        new Talent(mountAttack, 14, true),  
        new Talent(spotArmorFlaw, 14, false),
        new Talent(etherealWeapon, 15, false),
        new Talent(multiCharge, 15, true)
	]
};