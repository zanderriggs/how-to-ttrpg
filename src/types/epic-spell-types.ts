export type EpicSpellSeed = {
    name: string;
    dc: number;
    components: [string, string, string?];
    casting: number;
    range: string; // feet
    area?: string;
    target?: string;
    effect?: string;
    duration?: number; // seconds again...
    saving?: string;
    spellresist?: string;
};

export type EpicSpellSeedType = EpicSpellSeed[];
