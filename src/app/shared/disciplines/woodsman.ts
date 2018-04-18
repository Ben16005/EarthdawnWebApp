import { Discipline } from '../../models/discipline';
import { Talent } from '../../models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { avoidBlow, catsPaw, climbing, missileWeapons, tracking,
    meleeWeapons, mysticAim, sprint, woundBalance, threadWeavingSpecial,
    woodSkin, anticipateBlow, creatureAnalysis, lizardLeap, tigerSpring,
    dominateBeast, endureCold, detectWeapon, lionHeart, missilePath,
    secondAttack, senseDanger, chameleon, traceMissile, criticalHit,
    woodspeak, impressiveShot, spotArmorFlaw, defense, safePath,
    secondChance, spiritStrike, etherealWeapon,
    woodwalk} from '../library/disciplineTalents';


export const woodsman: Discipline = {
    name: 'Woodsman',
    circle: 1,
    talents: [
        new Talent(avoidBlow, 1, true),
        new Talent(catsPaw, 1, true),
        new Talent(climbing, 1, true),
        karmaRitual,
        new Talent(missileWeapons, 1, false),
        new Talent(tracking, 1, true),
        durability,
        new Talent(meleeWeapons, 2, false),
        new Talent(mysticAim, 2, false),
        new Talent(sprint, 3, false),
        new Talent(woundBalance, 3, true),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(woodSkin, 4, false),
        new Talent(anticipateBlow, 5, false),
        new Talent(creatureAnalysis, 5, true),
        new Talent(lizardLeap, 6, true),
        new Talent(tigerSpring, 6, false),
        new Talent(dominateBeast, 7, true),
        new Talent(endureCold, 7, true),
        new Talent(detectWeapon, 8, true),
        new Talent(lionHeart, 8, false),
        new Talent(missilePath, 9, true),
        new Talent(secondAttack, 9, false),
        new Talent(senseDanger, 9, true),
        new Talent(chameleon, 10, true),
        new Talent(traceMissile, 10, true),
        new Talent(criticalHit, 11, false),
        new Talent(woodspeak, 11, true),
        new Talent(impressiveShot, 12, true),
        new Talent(spotArmorFlaw, 12, false),
        new Talent(defense, 13, false),
        new Talent(safePath, 13, true),
        new Talent(secondChance, 14, false),
        new Talent(spiritStrike, 14, false),
        new Talent(etherealWeapon, 15, false),
        new Talent(woodwalk, 15, true)
    ]
};
