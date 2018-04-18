import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { evidenceAnalysis, itemHistory, readandWriteLanguage,
    research, speakLanguage, bookMemory, meleeWeapons, astralSight,
    search, avoidBlow, threadWeavingSpecial, arcaneMutterings,
    firstImpression, engagingBanter, gracefulExit, lionHeart,
    lipReading, creatureAnalysis, lastingImpression, diplomacy,
    hypnotize, resistTaunt, detectFalsehood, trueSight, lionSpirit,
    truthSkit, bardicVoice, safePath, mindWave, safeThought,
    detectInfluence, secondChance, multiTongue,
    vitality} from '../library/disciplineTalents';


export const traveledScholar: Discipline = {
    name: 'Traveled Scholar',
    circle: 1,
    talents: [
        new Talent(evidenceAnalysis, 1, false),
        new Talent(itemHistory, 1, true),
        karmaRitual,
        new Talent(readandWriteLanguage, 1, true),
        new Talent(research, 1, true),
        new Talent(speakLanguage, 1, true),
        new Talent(bookMemory, 2, true),
        durability,
        new Talent(meleeWeapons, 2, false),
        new Talent(astralSight, 3, false),
        new Talent(search, 3, true),
        new Talent(avoidBlow, 4, false),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(arcaneMutterings, 5, false),
        new Talent(firstImpression, 5, true),
        new Talent(engagingBanter, 6, true),
        new Talent(gracefulExit, 6, true),
        new Talent(lionHeart, 7, false),
        new Talent(lipReading, 7, true),
        new Talent(creatureAnalysis, 8, false),
        new Talent(lastingImpression, 8, true),
        new Talent(diplomacy, 9, false),
        new Talent(hypnotize, 9, true),
        new Talent(resistTaunt, 9, false),
        new Talent(detectFalsehood, 10, true),
        new Talent(trueSight, 10, true),
        new Talent(lionSpirit, 11, false),
        new Talent(truthSkit, 11, true),
        new Talent(bardicVoice, 12, true),
        new Talent(safePath, 12, true),
        new Talent(mindWave, 13, true),
        new Talent(safeThought, 13, true),
        new Talent(detectInfluence, 14, true),
        new Talent(secondChance, 14, false),
        new Talent(multiTongue, 15, true),
        new Talent(vitality, 15, false)
    ]
};
