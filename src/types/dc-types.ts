export type DifficultyCheckType = {
    text: string;
    dc: string;
};

export type DieType = {
    num: number;
    sides: number;
};

export type BreakACDifficultyType = {
    text: string;
    ac: number;
};

export type BreakHPDifficultyType = {
    text: string;
    fragile: {
        avg: number;
        die: DieType;
    };
    resilient: {
        avg: number;
        die: DieType;
    };
};

export type ToolCheckType = {
    text: string;
    difficulty: string;
};

export type ToolProficiencyCheckType = {
    name: string;
    dcs: ToolCheckType[];
};

export type DifficultyCheckTypeGroup = DifficultyCheckType[];
export type BreakACDifficultyTypeGroup = BreakACDifficultyType[];
export type BreakHPDifficultyTypeGroup = BreakHPDifficultyType[];
export type ToolProficiencyCheckTypeGroup = ToolProficiencyCheckType[];
