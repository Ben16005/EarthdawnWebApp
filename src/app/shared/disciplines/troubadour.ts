import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { disguiseSelf, emotionSong, firstImpression, meleeWeapons,
    mimicVoice, itemHistory, speakLanguage, empathicSense,
    readandWriteLanguage, taunt, threadWeavingSpecial, engagingBanter,
    throwingWeapons, haggle, resistTaunt, inciteMob, missileWeapons,
    gracefulExit, hypnotize, bardicVoice, bladeJuggle, trueSight,
    multiTongue, sloughBlame, impressiveShot, songofDeflection,
    thoughtLink, truthSkit, bloodGuiltWeapon, detectInfluence,
    lifeCheck, spiritTalk, auraArmor,
    confrontHorror} from '../library/disciplineTalents';


export const troubadour: Discipline = {
    name: 'Troubadour',
    circle: 1,
    talents: [
        new Talent(disguiseSelf, 1, true),
        new Talent(emotionSong, 1, true),
        new Talent(firstImpression, 1, false),
        karmaRitual,
        new Talent(meleeWeapons, 1, false),
        new Talent(mimicVoice, 1, true),
        durability,
        new Talent(itemHistory, 2, false),
        new Talent(speakLanguage, 2, true),
        new Talent(empathicSense, 3, true),
        new Talent(readandWriteLanguage, 3, true),
        new Talent(taunt, 4, false),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(engagingBanter, 5, true),
        new Talent(throwingWeapons, 5, false),
        new Talent(haggle, 6, false),
        new Talent(resistTaunt, 6, true),
        new Talent(inciteMob, 7, true),
        new Talent(missileWeapons, 7, false),
        new Talent(gracefulExit, 8, false),
        new Talent(hypnotize, 8, false),
        new Talent(bardicVoice, 9, true),
        new Talent(bladeJuggle, 9, false),
        new Talent(trueSight, 9, false),
        new Talent(multiTongue, 10, false),
        new Talent(sloughBlame, 10, true),
        new Talent(impressiveShot, 11, false),
        new Talent(songofDeflection, 11, true),
        new Talent(thoughtLink, 12, false),
        new Talent(truthSkit, 12, true),
        new Talent(bloodGuiltWeapon, 13, false),
        new Talent(detectInfluence, 13, true),
        new Talent(lifeCheck, 14, false),
        new Talent(spiritTalk, 14, false),
        new Talent(auraArmor, 15, false),
        new Talent(confrontHorror, 15, false)
    ]
};
