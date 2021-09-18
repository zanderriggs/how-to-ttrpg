import { BreakACDifficultyTypeGroup, BreakHPDifficultyTypeGroup } from '../types/dc-types';

// data
export const OBJECT_BREAK_HP_INFO: BreakHPDifficultyTypeGroup = [
    {
        text: 'Tiny (bottle, lock)',
        fragile: {
            avg: 2,
            die: {
                num: 1,
                sides: 4,
            },
        },
        resilient: {
            avg: 5,
            die: {
                num: 2,
                sides: 4,
            },
        },
    },
    {
        text: 'Small (chest, lute)',
        fragile: {
            avg: 3,
            die: {
                num: 1,
                sides: 6,
            },
        },
        resilient: {
            avg: 10,
            die: {
                num: 3,
                sides: 6,
            },
        },
    },
    {
        text: 'Medium (barrel, chandelier)',
        fragile: {
            avg: 4,
            die: {
                num: 1,
                sides: 8,
            },
        },
        resilient: {
            avg: 18,
            die: {
                num: 4,
                sides: 8,
            },
        },
    },
    {
        text: 'Large (cart, 10-ft.-by-10-ft. window)',
        fragile: {
            avg: 5,
            die: {
                num: 1,
                sides: 10,
            },
        },
        resilient: {
            avg: 27,
            die: {
                num: 5,
                sides: 10,
            },
        },
    },
];

export const OBJECT_BREAK_AC_INFO: BreakACDifficultyTypeGroup = [
    {
        text: 'Cloth, paper, rope',
        ac: 11,
    },
    {
        text: 'Crystal, glass, ice',
        ac: 13,
    },
    {
        text: 'Wood, bone',
        ac: 15,
    },
    {
        text: 'Stone',
        ac: 17,
    },
    {
        text: 'Iron, steel',
        ac: 19,
    },
    {
        text: 'Mithral',
        ac: 21,
    },
    {
        text: 'Adamantine',
        ac: 23,
    },
];
