import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { readandWriteIllusionism, spellcasting, spellMatrix_Illusionist,
    threadWeavingSpecial, disguiseSelf, deadFall, speakLanguage, falseSight,
    sloughBlame, willforce, astralSight, fastHand, engagingBanter, enhancedMatrix_Illusionist,
    trueSight, armoredMatrix_Illusionist, detectFalsehood, resistTaunt, memorizeImage, mindWave,
    hypnotize, safeThought, thoughtfulExpression, matrixStrike, sharedMatrix_Illusionist,
    multiWeaving, secondChance } from '../library/disciplineTalents';


export const illusionist: Discipline = {
    name: 'Illusionist',
    circle: 1,
    talents: [
        karmaRitual,
        new Talent(readandWriteIllusionism, 1, true),
        new Talent(spellcasting, 1, true),
        new Talent(spellMatrix_Illusionist, 1, false),
        new Talent(spellMatrix_Illusionist, 1, false),
        new Talent(threadWeavingSpecial, 1, true),
        new Talent(disguiseSelf, 2, true),
        durability,
        new Talent(spellMatrix_Illusionist, 2, false),
        new Talent(deadFall, 3, true),
        new Talent(speakLanguage, 3, false),
        new Talent(falseSight, 4, true),
        new Talent(spellMatrix_Illusionist, 4, false),
        new Talent(sloughBlame, 5, true),
        new Talent(willforce, 5, false),
        new Talent(astralSight, 6, true),
        new Talent(fastHand, 6, true),
        new Talent(engagingBanter, 7, true),
        new Talent(enhancedMatrix_Illusionist, 7, false),
        new Talent(enhancedMatrix_Illusionist, 8, false),
        new Talent(trueSight, 8, true),
        new Talent(armoredMatrix_Illusionist, 9, false),
        new Talent(detectFalsehood, 9, true),
        new Talent(resistTaunt, 9, true),
        new Talent(memorizeImage, 10, false),
        new Talent(mindWave, 10, true),
        new Talent(armoredMatrix_Illusionist, 11, false),
        new Talent(hypnotize, 11, true),
        new Talent(safeThought, 12, true),
        new Talent(thoughtfulExpression, 12, true),
        new Talent(matrixStrike, 13, false),
        new Talent(sharedMatrix_Illusionist, 13, false),
        new Talent(multiWeaving, 14, true),
        new Talent(sharedMatrix_Illusionist, 14, false),
        new Talent(secondChance, 15, true),
        new Talent(sharedMatrix_Illusionist, 15, false)
    ]
};
