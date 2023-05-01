export interface BaseEpicComponentProps {
    modifyDifficultyCheck: (modifier: number) => void;
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
