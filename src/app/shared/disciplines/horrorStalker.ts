import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { astralSight, avoidBlow, meleeWeapons, steelThought, woodSkin,
    creatureAnalysis, tracking, abateCurse, bearMark, hearteningLaugh,
    threadWeavingSpecial, lionHeart, temperSelf, lifeCheck,
    tigerSpring, secondAttack, earthSkin, spiritStrike, steelyStare,
    bestialResilience, crushingBlow, horrorHound, defense, lionSpirit,
    detectInfluence, vitality, ascension, confrontHorror, auraArmor,
    suppressInfluence, secondChance, vitalStrike, multiStrike,
    netherwalk} from '../library/disciplineTalents';


export const horrorStalker: Discipline = {
    name: 'Horror Stalker',
    circle: 1,
    talents: [
        new Talent(astralSight, 1, true),
        new Talent(avoidBlow, 1, true),
        karmaRitual,
        new Talent(meleeWeapons, 1, true),
        new Talent(steelThought, 1, true),
        new Talent(woodSkin, 1, false),
        new Talent(creatureAnalysis, 2, true),
        durability,
        new Talent(tracking, 2, true),
        new Talent(abateCurse, 3, true),
        new Talent(bearMark, 3, true),
        new Talent(hearteningLaugh, 4, false),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(lionHeart, 5, true),
        new Talent(temperSelf, 5, true),
        new Talent(lifeCheck, 6, true),
        new Talent(tigerSpring, 6, false),
        new Talent(secondAttack, 7, true),
        new Talent(earthSkin, 7, true),
        new Talent(spiritStrike, 8, true),
        new Talent(steelyStare, 8, false),
        new Talent(bestialResilience, 9, false),
        new Talent(crushingBlow, 9, false),
        new Talent(horrorHound, 9, true),
        new Talent(defense, 10, false),
        new Talent(lionSpirit, 10, false),
        new Talent(detectInfluence, 11, true),
        new Talent(vitality, 11, false),
        new Talent(ascension, 12, false),
        new Talent(confrontHorror, 12, true),
        new Talent(auraArmor, 13, true),
        new Talent(suppressInfluence, 13, true),
        new Talent(secondChance, 14, false),
        new Talent(vitalStrike, 14, false),
        new Talent(multiStrike, 15, false),
        new Talent(netherwalk, 15, true)
    ]
};
