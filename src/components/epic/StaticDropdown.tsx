import React, { useState } from 'react';
import { DropDownMap } from './types';

interface StaticDropdownProps {
    name: string;
    map: DropDownMap[];
    staticValue?: number;
    onChange: (num: number) => void;
}

export const StaticDropdown = ({ map, name, onChange, staticValue }: StaticDropdownProps) => {
    const [selected, setSelected] = useState<string>('-');
    const calculateReturn = (e: React.FormEvent<HTMLSelectElement>) => {
        const { value, selectedOptions } = e.currentTarget;
        setSelected(value);
        onChange(parseInt(selectedOptions[0]?.dataset.value || '0', 10));
    };

    console.log({ map, staticValue });

    return (
        <select name={name} value={selected} onChange={calculateReturn}>
            <option value="-">-</option>
            {map.map(obj => (
                <option key={obj.text} value={obj.text} data-value={`${obj.typeVal || staticValue}`}>
                    {obj.text}
                </option>
            ))}
        </select>
    );
};
