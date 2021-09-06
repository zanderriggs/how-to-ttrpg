import * as React from 'react';
import { Link } from 'gatsby';
import '../styles/style.scss';
import { DifficultyCheckTypeGroup } from '../types/dc-types';

// data
const DC_STANDARD: DifficultyCheckTypeGroup = [
    {
        text: 'Very easy',
        dc: '5',
    },
    {
        text: 'Easy',
        dc: '10',
    },
    {
        text: 'Moderate',
        dc: '15',
    },
    {
        text: 'Hard',
        dc: '20',
    },
    {
        text: 'Very hard',
        dc: '25',
    },
    {
        text: 'Nearly impossible',
        dc: '30',
    },
];

// data
const DC_TRACKING: DifficultyCheckTypeGroup = [
    {
        text: 'Soft surface such as snow',
        dc: '10',
    },
    {
        text: 'Dirt or grass',
        dc: '15',
    },
    {
        text: 'Bare stone',
        dc: '20',
    },
    {
        text: 'Each day since the creature passed',
        dc: '+5',
    },
    {
        text: 'The creature left a trail, such as blood',
        dc: '-5',
    },
];

const DifficultyPage = (): React.ReactElement => {
    return (
        <main>
            <title>DCs</title>
            <h1>Setting DCs</h1>
            <h2>
                <Link to="/">Home</Link>
            </h2>
            <p></p>

            <h2>Standard Skill DCs</h2>
            <ul>
                {DC_STANDARD.map(item => (
                    <li key={item.dc}>
                        <span>{item.text}</span> <span>{item.dc}</span>
                    </li>
                ))}
            </ul>

            <h2>Tracking Quarry DCs</h2>
            <ul>
                {DC_TRACKING.map(item => (
                    <li key={item.dc}>
                        <span>{item.text}</span> <span>{item.dc}</span>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default DifficultyPage;
