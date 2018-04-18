import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { avoidBlow, climbing, directionSense, meleeWeapons,
    speakLanguage, readandWriteLanguage, woundBalance, bookMemory,
    sprint, firstImpression, threadWeavingSpecial, greatLeap,
    temperSelf, detectTrap, trapInitiative, endureCold, glidingStride,
    airSpeaking, senseDanger, detectWeapon, lionHeart, spiritMount,
    safePath, safeThought, resistTaunt, steelThought, lifeCheck,
    missileTwister, defense, sensePoison, poisonResistance,
    secondChance, echoLocation,
    stoneSkin} from '../library/disciplineTalents';


export const messenger: Discipline = {
    name: 'Messenger',
    circle: 1,
    talents: [
        new Talent(avoidBlow, 1, false),
        new Talent(climbing, 1, true),
        new Talent(directionSense, 1, true),
        karmaRitual,
        new Talent(meleeWeapons, 1, false),
        new Talent(speakLanguage, 1, true),
        durability,
        new Talent(readandWriteLanguage, 2, true),
        new Talent(woundBalance, 2, false),
        new Talent(bookMemory, 3, true),
        new Talent(sprint, 3, true),
        new Talent(firstImpression, 4, false),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(greatLeap, 5, false),
        new Talent(temperSelf, 5, true),
        new Talent(detectTrap, 6, true),
        new Talent(trapInitiative, 6, true),
        new Talent(endureCold, 7, true),
        new Talent(glidingStride, 7, false),
        new Talent(airSpeaking, 8, true),
        new Talent(senseDanger, 8, true),
        new Talent(detectWeapon, 9, false),
        new Talent(lionHeart, 9, true),
        new Talent(spiritMount, 9, false),
        new Talent(safePath, 10, true),
        new Talent(safeThought, 10, true),
        new Talent(resistTaunt, 11, true),
        new Talent(steelThought, 11, true),
        new Talent(lifeCheck, 12, true),
        new Talent(missileTwister, 12, true),
        new Talent(defense, 13, false),
        new Talent(sensePoison, 13, false),
        new Talent(poisonResistance, 14, false),
        new Talent(secondChance, 14, true),
        new Talent(echoLocation, 15, true),
        new Talent(stoneSkin, 15, false)
    ]
};
