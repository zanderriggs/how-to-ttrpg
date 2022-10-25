import { SPELL_SEEDS } from '../data/epic-spell-seed';

function getSpellSeedById(id: string) {
    // get objects from epic-spell-seed.ts
    const spellSeed = SPELL_SEEDS.find(spellSeed => spellSeed.id == id);
    console.log(`spell seed ${spellSeed?.name}`);
    return 1;
}

export { getSpellSeedById };
