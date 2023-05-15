export interface SpellComponent {
  category: string;
  dcModifier: number;
  school?: string;
}

export interface BaseEpicComponentProps {
  addSpell: (spellType: string, dcModifier: number, school?: string) => void;
  removeSpell: (spellType: string) => void;
}

export type AfflictComponentProps = BaseEpicComponentProps;

export interface ValidateUpdater {
  min?: number;
  max?: number;
  updateMultiplier?: number;
}

export interface DropDownMap {
  text: string;
  typeVal?: number;
}
