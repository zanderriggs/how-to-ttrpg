export type DifficultyCheckType = {
    text: string;
    dc: string;
};

export type BreakACDifficultyType = {
    text: string;
    ac: string;
};

export type BreakHPDifficultyType = {
    text: string;
    fragile: string;
    resilient: string;
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
