import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { climbing, lockPicking, throwingWeapons, pickingPockets, 
    silentWalk, lockSense, surpriseStrike, avoidBlow, haggle, 
    threadWeavingSpecial, trapInitiative, detectTrap, disarmTrap, 
    disguiseSelf, fastHand, detectWeapon, meleeWeapons, missileWeapons, 
    sloughBlame, concealWeapon, goldSense, sprint, astralPocket, 
    speakLanguage, lipReading, woundBalance, quickBlade, sensePoison, 
    chameleon, warningShot, bankShot, defense, gainSurprise, 
    trueSight} from '../library/disciplineTalents';


export const thief: Discipline = {
    name: 'Thief',
    circle: 1,
    talents: [
        new Talent(climbing, 1, false),
        karmaRitual,
        new Talent(lockPicking, 1, true),
        new Talent(throwingWeapons, 1, true),
        new Talent(pickingPockets, 1, true),
        new Talent(silentWalk, 1, true),
        durability,  
        new Talent(lockSense, 2, true),
        new Talent(surpriseStrike, 2, true),
        new Talent(avoidBlow, 3, true),
        new Talent(haggle, 3, true),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(trapInitiative, 4, true),
        new Talent(detectTrap, 5, false),
        new Talent(disarmTrap, 5, true),
        new Talent(disguiseSelf, 6, false),
        new Talent(fastHand, 6, true),
        new Talent(detectWeapon, 7, false),
        new Talent(meleeWeapons, 7, true),
        new Talent(missileWeapons, 8, false),  
        new Talent(sloughBlame, 8, false),
        new Talent(concealWeapon, 9, true),
        new Talent(goldSense, 9, false),
        new Talent(sprint, 9, false),
        new Talent(astralPocket, 10, true),
        new Talent(speakLanguage, 10, false),
        new Talent(lipReading, 11, true),
        new Talent(woundBalance, 11, false),
        new Talent(quickBlade, 12, false),
        new Talent(sensePoison, 12, true),
        new Talent(chameleon, 13, false),
        new Talent(warningShot, 13, false),
        new Talent(bankShot, 14, false),  
        new Talent(defense, 14, false),
        new Talent(gainSurprise, 15, true),
        new Talent(trueSight, 15, false)
    ]
};