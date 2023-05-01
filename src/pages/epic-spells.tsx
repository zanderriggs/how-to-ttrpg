import { EpicLogo } from '../icons/epic';

import styles from './epicSpells.module.scss';
import { Afflict } from '../components/epic/Afflict';

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
            <Afflict modifyDifficultyCheck={num => console.log('nice', num)} />
        </>
    );
};
