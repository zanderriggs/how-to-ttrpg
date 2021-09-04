import * as React from 'react';
import { Link } from 'gatsby';
import '../styles/style.scss';

// data
const data = [
    {
        text: 'Very easy',
        dc:'5'
    },
    {
        text: 'Easy',
        dc:'10'
    },
    {
        text: 'Moderate',
        dc:'15'
    },
    {
        text: 'Hard',
        dc:'20'
    },
    {
        text: 'Very hard',
        dc:'25'
    },
    {
        text: 'Nearly impossible',
        dc:'30'
    }
];

// data
const track = [
    {
        text: 'Soft surface such as snow',
        dc:'10'
    },
    {
        text: 'Dirt or grass',
        dc:'15'
    },
    {
        text: 'Bare stone',
        dc:'20'
    },
    {
        text: 'Each day since the creature passed',
        dc:'(+5)'
    },
    {
        text: 'The creature left a trail, such as blood',
        dc:'(-5)'
    }
];

const DifficultyPage = () => {
    return (
        <main>
            <title>DCs</title>
            <h1>Setting DCs</h1>
            <h2>
                <Link to="/">Home</Link>
            </h2>
            <p></p>

            <h2> Standard Skill DCs </h2>
            <ul className="listStyles">
                {data.map(item => (
                    <li key={item.dc} className="listItemStyles">
                        {item.text} {item.dc}
                    </li>
                ))}
            </ul>

            <h2> Tracking Quarry DCs </h2>
            <ul className="listStyles">
                {track.map(item => (
                    <li key={item.dc} className="listItemStyles">
                        {item.text} {item.dc}
                    </li>
                ))}
            </ul>

            <img
                alt="Gatsby G Logo"
                src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
            />
        </main>
    );
};

export default DifficultyPage;
