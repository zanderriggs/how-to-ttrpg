import { useEpicSpellsContext } from './context/EpicSpellContext';

/**
 * Resource Cost
 * The development of an epic spell uses up raw materials costing a number of gold pieces equal to 9,000 × the final Spellcraft DC of the epic spell being developed.
 *
 * Development Time
 * Developing an epic spell takes one day for each 50,000 gp in resources required to develop the spell, rounded up to whole days.
 *
 * XP Cost
 * To develop an epic spell, a character must spend 1/25 of its resource price in experience points.
 */
export const SpellBox = () => {
  const spells = useEpicSpellsContext();

  const getCost = () => {
    let val = 0;
    for (const spell of spells) {
      val += spell.dcModifier * 9000;
    }
    return val;
  };

  const getDevelopmentTime = () => {
    const cost = getCost();
    return Math.ceil(cost / 50000);
  };

  const getXpCost = () => {
    const cost = getCost();
    return Math.round(cost * 0.04);
  };

  return (
    <div className="spell">
      <h3>Your Spell</h3>
      <div>
        <strong>Resource Cost:</strong> <span>{getCost()}gp</span>
      </div>
      <div>
        <strong>Development Time:</strong> <span>{getDevelopmentTime()} days</span>
      </div>
      <div>
        <strong>XP Cost:</strong> <span>{getXpCost()}xp</span>
      </div>
    </div>
  );
};
