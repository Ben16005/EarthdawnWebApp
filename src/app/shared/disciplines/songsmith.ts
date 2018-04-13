import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { avoidBlow, firstImpression, meleeWeapons, performance, 
    speakLanguage, forgeWeapon, itemHistory, haggle, readandWriteLanguage, 
    temperSelf, threadWeavingSpecial, engagingBanter, winningSmile, abateCurse, 
    resistTaunt, disguiseSelf, mimicVoice, detectWeapon, trueSight, 
    bardicVoice, impressiveStrike, lastingImpression, concealWeapon, 
    sloughBlame, lifeCheck, memorizeImage, forgeArmor, safeThought, 
    spiritTalk, thoughtLink, firstRingofPerfection, secondChance, 
    astralPocket, multiTongue} from '../library/disciplineTalents';


export const songsmith: Discipline = {
    name: 'Songsmith',
    circle: 1,
    talents: [
        new Talent(avoidBlow, 1, false),
        new Talent(firstImpression, 1, true),
        karmaRitual,
        new Talent(meleeWeapons, 1, false),
        new Talent(performance, 1, true),
        new Talent(speakLanguage, 1, true),
        durability,  
        new Talent(forgeWeapon, 2, false),
        new Talent(itemHistory, 2, false),
        new Talent(haggle, 3, true),
        new Talent(readandWriteLanguage, 3, false),
        new Talent(temperSelf, 4, false),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(engagingBanter, 5, false),
        new Talent(winningSmile, 5, false),
        new Talent(abateCurse, 6, false),
        new Talent(resistTaunt, 6, true),
        new Talent(disguiseSelf, 7, true),
        new Talent(mimicVoice, 7, false),
        new Talent(detectWeapon, 8, false),  
        new Talent(trueSight, 8, true),
        new Talent(bardicVoice, 9, false),
        new Talent(impressiveStrike, 9, false),
        new Talent(lastingImpression, 9, false),
        new Talent(concealWeapon, 10, false),
        new Talent(sloughBlame, 10, false),
        new Talent(lifeCheck, 11, false),
        new Talent(memorizeImage, 11, false),
        new Talent(forgeArmor, 12, false),
        new Talent(safeThought, 12, true),
        new Talent(spiritTalk, 13, false),
        new Talent(thoughtLink, 13, false),
        new Talent(firstRingofPerfection, 14, true),  
        new Talent(secondChance, 14, false),
        new Talent(astralPocket, 15, false),
        new Talent(multiTongue, 15, false)
    ]
};