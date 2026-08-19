import '../styles/die.scss';

import * as React from 'react';

import { DieType } from '../types/dc-types';

export const Die = ({
  die,
  inline = true,
  size = 16,
}: {
  die: DieType;
  size?: number;
  inline?: boolean;
}): React.ReactElement => {
  const containerClass = `die-container d${die.sides} ${inline ? 'inline-die' : ''}`;

  const getDie = (): React.ReactElement | undefined => {
    switch (die.sides) {
      case 2:
      case 6:
      case 10:
      case 12:
      case 20:
      case 100:
        return <>die</>;
      case 4:
        return (
          <>
            <div className="eqt"></div>
            <div className="eqt-left"></div>
          </>
        );
      case 8:
        return (
          <>
            <div className="eqt"></div>
            <div className="eqt-left"></div>
            <div className="eqt-right"></div>
            <div className="eqt-bottom"></div>
          </>
        );
    }
  };

  const dieSizeCssVariable = { '--die-size': `${size}px` } as React.CSSProperties;

  return (
    <div style={dieSizeCssVariable} className={containerClass}>
      <div className={`die-face ${die.sides}-face`}>{die.sides}</div>
      {getDie()}
    </div>
  );
};
