import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { avoidBlow, climbing, meleeWeapons, silentWalk, tracking, 
    maneuver, readandWriteLanguage, astralSight, sprint, riposte, 
    threadWeavingSpecial, lockSense, trapInitiative, greatLeap, 
    speakLanguage, detectTrap, endureCold, glidingStride, 
    missileWeapons, anticipateBlow, creatureAnalysis, detectWeapon, 
    missileTwister, traceMissile, disguiseSelf, woundBalance, 
    defense, quickBlade, safePath, sensePoison, secondChance, 
    poisonResistance, echoLocation, 
    etherealWeapon} from '../library/disciplineTalents';


export const scout: Discipline = {
    name: 'Scout',
    circle: 1,
    talents: [
        new Talent(avoidBlow, 1, true),
        new Talent(climbing, 1, true),
        karmaRitual,
        new Talent(meleeWeapons, 1, false),
        new Talent(silentWalk, 1, true),
        new Talent(tracking, 1, true),
        durability,  
        new Talent(maneuver, 2, false),
        new Talent(readandWriteLanguage, 2, false),
        new Talent(astralSight, 3, true),
        new Talent(sprint, 3, false),
        new Talent(riposte, 4, false),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(lockSense, 5, false),
        new Talent(trapInitiative, 5, true),
        new Talent(greatLeap, 6, false),
        new Talent(speakLanguage, 6, false),
        new Talent(detectTrap, 7, true),
        new Talent(endureCold, 7, true),
        new Talent(glidingStride, 8, true),  
        new Talent(missileWeapons, 8, false),
        new Talent(anticipateBlow, 9, false),
        new Talent(creatureAnalysis, 9, true),
        new Talent(detectWeapon, 9, true),
        new Talent(missileTwister, 10, false),
        new Talent(traceMissile, 10, true),
        new Talent(disguiseSelf, 11, false),
        new Talent(woundBalance, 11, false),
        new Talent(defense, 12, true),
        new Talent(quickBlade, 12, false),
        new Talent(safePath, 13, true),
        new Talent(sensePoison, 13, true),
        new Talent(secondChance, 14, false),  
        new Talent(poisonResistance, 14, true),
        new Talent(echoLocation, 15, true),
        new Talent(etherealWeapon, 15, false)
    ]
};