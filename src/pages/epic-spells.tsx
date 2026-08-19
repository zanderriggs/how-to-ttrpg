import { EpicSpellProvider } from '../components/epic/context/EpicSpellContext';
import { CreateEpicSpell } from '../components/epic/CreateEpicSpell';

export const EpicSpells = () => {
  return (
    <EpicSpellProvider>
      <CreateEpicSpell />
    </EpicSpellProvider>
  );
};
