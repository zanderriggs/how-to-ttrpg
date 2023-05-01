import React, { useEffect, useState } from 'react';
import { AfflictComponentProps } from './types';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { Digit } from './Digit';
import { StaticDropdown } from './StaticDropdown';
import { AFFECT_SENSES } from './constants';

const DEFAULT_DC = 14;

const DEFAULT_TALLY_MAP = {
    aspect: 0,
    penalty: 0,
    sense: 0,
};

export const Afflict = ({ modifyDifficultyCheck }: AfflictComponentProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [tallyMap, setTallyMap] = useState(DEFAULT_TALLY_MAP);

    useEffect(() => {
        if (isChecked) {
            modifyDifficultyCheck(DEFAULT_DC + tallyMap.aspect + tallyMap.penalty + tallyMap.sense);
        }
    }, [tallyMap, isChecked]);

    const calculateTotalAndUpdate = (name: string) => (add: number) => {
        if (!isChecked) {
            setTallyMap(DEFAULT_TALLY_MAP);
            modifyDifficultyCheck(0);
            return;
        }
        setTallyMap({ ...tallyMap, [name]: add });
    };

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.checkbox}>
                    <input
                        onClick={() => setIsChecked(!isChecked)}
                        type="checkbox"
                        value="afflict"
                        checked={isChecked}
                        onChange={() => calculateTotalAndUpdate('dc')}
                    />
                </div>
                <div className={styles.title}>Afflict</div>
            </div>
            <div className={classNames(styles.componentOptions, { [styles.showOptions]: isChecked })}>
                Subtract{' '}
                <Digit
                    max={99}
                    min={0}
                    onChange={calculateTotalAndUpdate('penalty')}
                    updateMultiplier={2}
                    name="afflict-penalty"
                />
                from attack rolls, checks, or saving throws <strong>(+2 per -1)</strong>
            </div>
            <div className={classNames(styles.componentOptions, { [styles.showOptions]: isChecked })}>
                Subtract{' '}
                <Digit
                    max={99}
                    min={0}
                    onChange={calculateTotalAndUpdate('aspect')}
                    updateMultiplier={4}
                    name="afflict-aspect"
                />
                aspect (caster level checks, ability score, spell resistance, or other) <strong>(+4 per -1)</strong>
            </div>
            <div className={classNames(styles.componentOptions, { [styles.showOptions]: isChecked })}>
                Affect sense <strong>(+2)</strong>:
                <StaticDropdown
                    onChange={calculateTotalAndUpdate('sense')}
                    map={AFFECT_SENSES}
                    name="afflict-affect-sense"
                    staticValue={2}
                />
            </div>
        </div>
    );
};
