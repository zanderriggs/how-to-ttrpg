import styles from './createEpicSpell.module.scss';
import { EpicLogo } from '../../icons/epic';
import { SpellBox } from './SpellBox';
import { Afflict } from './Afflict';
import { useEpicSpellsDispatchContext } from './context/EpicSpellContext';
import { SpellComponent } from './types';

export const CreateEpicSpell = () => {
  const dispatch = useEpicSpellsDispatchContext();

  const addSpell = (spellCategory: string, dcModifier: number, school?: string) => {
    const spell: SpellComponent = {
      category: spellCategory,
      dcModifier,
      school,
    };
    dispatch({
      type: 'UPDATE_SPELL',
      spell,
    });
  };
  const removeSpell = (spellCategory: string) => {
    const spell: SpellComponent = {
      category: spellCategory,
      dcModifier: 0,
    };
    dispatch({
      type: 'REMOVE_SPELL',
      spell,
    });
  };
  return (
    <>
      <header className={styles.epicSpellHeader}>
        <div className="logo">
          <EpicLogo />
        </div>
        <SpellBox />
      </header>
      <section>Create an epic spell.</section>
      <Afflict addSpell={addSpell} removeSpell={removeSpell} />
    </>
  );
};
