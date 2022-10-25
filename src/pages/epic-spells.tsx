import { EpicLogo } from '../icons/epic';
import { SPELL_SEEDS } from '../data/epic-spell-seed';
import { getSpellSeedById } from '../services/epic-spells-services';

import styles from './epicSpells.module.scss';

export const EpicSpells = () => {
    return (
        <>
            <header className={styles.epicSpellHeader}>
                <div className="spell">Your Spell</div>
                <div className="logo">
                    <EpicLogo />
                </div>
            </header>
            <section>Create an epic spell.</section>
            <section>
                <input type="button" value="Click for spellseed" onClick={() => getSpellSeedById('1')}></input>
            </section>
            <div>
                <ul>
                    {SPELL_SEEDS.map(seed => (
                        <div key={seed.id}>
                            <span>
                                <input type="checkbox" id={seed.id} name={`${seed.name}-checkbox`}></input>
                            </span>{' '}
                            <span>{seed.name}</span>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    );
};
