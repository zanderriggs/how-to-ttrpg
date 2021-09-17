import { BreakACDifficultyTypeGroup, BreakHPDifficultyTypeGroup } from '../types/dc-types';

// data
export const OBJECT_BREAK_HP_INFO: BreakHPDifficultyTypeGroup = [
    {
        text: 'Tiny (bottle, lock)',
        fragile: '2 (1d4)',
        resilient: '5 (2d4)',
    },
    {
        text: 'Small (chest, lute)',
        fragile: '3 (1d6)',
        resilient: '10 (3d6)',
    },
    {
        text: 'Medium (barrel, chandelier)',
        fragile: '4 (1d8)',
        resilient: '18 (4d8)',
    },
    {
        text: 'Large (cart, 10-ft.-by-10-ft. window)',
        fragile: '5 (1d10)',
        resilient: '27 (5d10)',
    },
];

export const OBJECT_BREAK_AC_INFO: BreakACDifficultyTypeGroup = [
    {
        text: 'Cloth, paper, rope',
        ac: '11',
    },
    {
        text: 'Crystal, glass, ice',
        ac: '13',
    },
    {
        text: 'Wood, bone',
        ac: '15',
    },
    {
        text: 'Stone',
        ac: '17',
    },
    {
        text: 'Iron, steel',
        ac: '19',
    },
    {
        text: 'Mithral',
        ac: '21',
    },
    {
        text: 'Adamantine',
        ac: '23',
    },
];
