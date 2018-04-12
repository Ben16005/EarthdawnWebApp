import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { conversation, meleeWeapons, mimicVoice, speakLanguage, 
    windDance, etiquette, itemHistory, emotionSong, firstImpression, 
    pickingPockets, threadWeavingSpecial, birdSong, taunt, haggle, 
    lipReading, deadFall, lionHeart, fastHand, hypnotize, bardicVoice, 
    gracefulExit, spiritTalk, resistTaunt, sloughBlame, detectFalsehood, 
    songofDeflection, impressiveStrike, truthSkit, bloodGuiltWeapon, 
    detectInfluence, multiTongue, trueSight, echoLocation, 
    secondChance} from '../library/disciplineTalents';


export const wind_Dancer: Discipline = {
    name: 'Wind-Dancer',
    circle: 1,
    talents: [
        new Talent(conversation, 1, true),
        karmaRitual,
        new Talent(meleeWeapons, 1, false),
        new Talent(mimicVoice, 1, true),
        new Talent(speakLanguage, 1, false),
        new Talent(windDance, 1, true),
        durability,  
        new Talent(etiquette, 2, true),
        new Talent(itemHistory, 2, true),
        new Talent(emotionSong, 3, true),
        new Talent(firstImpression, 3, true),
        new Talent(pickingPockets, 4, false),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(birdSong, 5, true),
        new Talent(taunt, 5, false),
        new Talent(haggle, 6, true),
        new Talent(lipReading, 6, false),
        new Talent(deadFall, 7, true),
        new Talent(lionHeart, 7, false),
        new Talent(fastHand, 8, true),  
        new Talent(hypnotize, 8, true),
        new Talent(bardicVoice, 9, true),
        new Talent(gracefulExit, 9, false),
        new Talent(spiritTalk, 9, false),
        new Talent(resistTaunt, 10, false),
        new Talent(sloughBlame, 10, true),
        new Talent(detectFalsehood, 11, true),
        new Talent(songofDeflection, 11, false),
        new Talent(impressiveStrike, 12, false),
        new Talent(truthSkit, 12, true),
        new Talent(bloodGuiltWeapon, 13, false),
        new Talent(detectInfluence, 13, true),
        new Talent(multiTongue, 14, true),  
        new Talent(trueSight, 14, false),
        new Talent(echoLocation, 15, false),
        new Talent(secondChance, 15, true)
    ]
};