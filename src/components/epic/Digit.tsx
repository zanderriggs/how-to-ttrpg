import styles from './styles.module.scss';
import React, { useState } from 'react';

interface DigitProps {
  increment?: number;
  max: number;
  min: number;
  name: string;
  onChange: (num: number) => void;
  startValue?: string | number;
  updateMultiplier?: number;
}

export const Digit = ({
  increment = 1,
  max,
  min,
  name,
  onChange,
  startValue = '0',
  updateMultiplier = 1,
}: DigitProps) => {
  const [digitValue, setDigitValue] = useState<string>(`${startValue}`);
  const validateDigitAndUpdate = (event: React.FormEvent<HTMLInputElement>) => {
    let converted = parseInt(event.currentTarget.value, 10);
    if (converted < min) {
      converted = min;
    }
    if (converted > max) {
      converted = max;
    }
    setDigitValue(`${converted}`);
    onChange(converted * updateMultiplier);
  };
  return (
    <input
      onChange={validateDigitAndUpdate}
      type="number"
      max="99"
      step={increment}
      min="0"
      value={`${digitValue}`}
      className={styles.digitText}
      name={name}
    />
  );
};
