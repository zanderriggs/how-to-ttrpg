import { createContext, Dispatch, ReactElement, useContext, useReducer } from 'react';
import { SpellComponent } from '../types';

interface EpicSpellReducerAction {
  type: string;
  spell: SpellComponent;
}

const EpicSpellsContext = createContext<SpellComponent[]>([]);
const EpicSpellsDispatchContext = createContext<Dispatch<EpicSpellReducerAction>>(() => null);

export const useEpicSpellsContext = () => useContext(EpicSpellsContext);

export const useEpicSpellsDispatchContext = () => useContext(EpicSpellsDispatchContext);

const epicSpellReducer = (spells: SpellComponent[], action: EpicSpellReducerAction) => {
  const allSpells = [...spells];
  switch (action.type) {
    case 'UPDATE_SPELL':
      if (spells.find(s => s.category === action.spell.category)) {
        const sp = spells.map(spell => {
          if (spell.category === action.spell.category) {
            return action.spell;
          } else {
            return spell;
          }
        });
        return sp;
      }
      allSpells.push(action.spell);
      return allSpells;
    case 'REMOVE_SPELL':
      return spells.filter(spell => spell.category !== action.spell.category);
    case 'FETCH_SPELL':
      return spells.filter(spell => spell.category === action.spell.category);
    default:
      return spells;
  }
};

export const EpicSpellProvider = ({ children }: { children: ReactElement | ReactElement[] }) => {
  const [spells, dispatch] = useReducer(epicSpellReducer, [] as SpellComponent[]);

  return (
    <EpicSpellsContext.Provider value={spells}>
      <EpicSpellsDispatchContext.Provider value={dispatch}>{children}</EpicSpellsDispatchContext.Provider>
    </EpicSpellsContext.Provider>
  );
};
