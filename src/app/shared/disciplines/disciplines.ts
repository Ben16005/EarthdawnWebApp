import { archer } from '../disciplines/archer';
import { Discipline } from '../../models/discipline';
import { swordMaster } from './swordmaster';
import { illusionist } from './illusionist';

export const fullDisciplineList: Discipline[] = [
    archer,
    illusionist,
    swordMaster
];
