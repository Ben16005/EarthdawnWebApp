import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { animalBond, clawShape, dominateBeast, tracking,
    unarmedCombat, animalTraining, creatureAnalysis, catsPaw,
    lizardLeap, frightenAnimals, threadWeavingSpecial, borrowSense,
    healAnimalServant, endureCold, inciteStampede, clawFrenzy, sensePoison,
    lionHeart, poisonResistance, animalPossession, bestialToughness, howl,
    animalLeadership, lionSpirit, developAnimalSense, tameMount,
    bestialResilience, chameleon, secondChance, trample, echoLocation,
    spiritStrike, astralWeb, venom} from '../library/disciplineTalents';


export const beastmaster: Discipline = {
    name: 'Beastmaster',
    circle: 1,
    talents: [
        new Talent(animalBond, 1, true),
        new Talent(clawShape, 1, true),
        new Talent(dominateBeast, 1, true),
        karmaRitual,
        new Talent(tracking, 1, false),
        new Talent(unarmedCombat, 1, false),
        new Talent(animalTraining, 2, true),
        new Talent(creatureAnalysis, 2, true),
        durability,
        new Talent(catsPaw, 3, true),
        new Talent(lizardLeap, 3, true),
        new Talent(frightenAnimals, 4, true),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(borrowSense, 5, true),
        new Talent(healAnimalServant, 5, true),
        new Talent(endureCold, 6, false),
        new Talent(inciteStampede, 6, true),
        new Talent(clawFrenzy, 7, true),
        new Talent(sensePoison, 7, false),
        new Talent(lionHeart, 8, true),
        new Talent(poisonResistance, 8, false),
        new Talent(animalPossession, 9, false),
        new Talent(bestialToughness, 9, false),
        new Talent(howl, 9, true),
        new Talent(animalLeadership, 10, true),
        new Talent(lionSpirit, 10, false),
        new Talent(developAnimalSense, 11, true),
        new Talent(tameMount, 11, true),
        new Talent(bestialResilience, 12, true),
        new Talent(chameleon, 12, false),
        new Talent(secondChance, 13, false),
        new Talent(trample, 13, false),
        new Talent(echoLocation, 14, true),
        new Talent(spiritStrike, 14, false),
        new Talent(astralWeb, 15, false),
        new Talent(venom, 15, true)
    ]
};
