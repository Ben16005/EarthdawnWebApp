import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { airDance, avoidBlow, evidenceAnalysis, missileWeapons,
    tracking, meleeWeapons, search, creatureAnalysis, surpriseStrike,
    scentIdentifier, threadWeavingSpecial, animalPossession,
    trapInitiative, eagleEye, speakLanguage, anticipateBlow,
    endureCold, birdSong, spotArmorFlaw, bestialResilience,
    senseDanger, trueSight, chameleon, traceMissile, missileTwister,
    safePath, defense, lionSpirit, blindFire, echoLocation,
    detectInfluence, secondChance, gainSurprise,
    multiShot} from '../library/disciplineTalents';


export const windscout: Discipline = {
    name: 'Windscout',
    circle: 1,
    talents: [
        new Talent(airDance, 1, true),
        new Talent(avoidBlow, 1, true),
        new Talent(evidenceAnalysis, 1, true),
        karmaRitual,
        new Talent(missileWeapons, 1, false),
        new Talent(tracking, 1, true),
        durability,
        new Talent(meleeWeapons, 2, false),
        new Talent(search, 2, true),
        new Talent(creatureAnalysis, 3, true),
        new Talent(surpriseStrike, 3, false),
        new Talent(scentIdentifier, 4, true),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(animalPossession, 5, false),
        new Talent(trapInitiative, 5, true),
        new Talent(eagleEye, 6, false),
        new Talent(speakLanguage, 6, true),
        new Talent(anticipateBlow, 7, true),
        new Talent(endureCold, 7, true),
        new Talent(birdSong, 8, true),
        new Talent(spotArmorFlaw, 8, false),
        new Talent(bestialResilience, 9, false),
        new Talent(senseDanger, 9, true),
        new Talent(trueSight, 9, true),
        new Talent(chameleon, 10, true),
        new Talent(traceMissile, 10, false),
        new Talent(missileTwister, 11, false),
        new Talent(safePath, 11, true),
        new Talent(defense, 12, true),
        new Talent(lionSpirit, 12, false),
        new Talent(blindFire, 13, false),
        new Talent(echoLocation, 13, true),
        new Talent(detectInfluence, 14, false),
        new Talent(secondChance, 14, true),
        new Talent(gainSurprise, 15, true),
        new Talent(multiShot, 15, false)
    ]
};
