import '../styles/style.scss';

import * as React from 'react';

import { OBJECT_BREAK_HP_INFO, OBJECT_BREAK_AC_INFO } from '../data/breaking-things-data';
import Layout from '../layout/page-layout';
import { Link } from 'gatsby';

//markup
const DifficultyPage = (): React.ReactElement => (
    <Layout>
        <title>Breaking Things</title>
        <h1>Breaking Things</h1>
        <h2>
            <Link to="/">Home</Link>
        </h2>
        <h2>Object Armor Class</h2>
        <ul>
            {OBJECT_BREAK_AC_INFO.map(item => (
                <li key={item.text}>
                    <span>{item.text}</span> <span>{item.ac}</span>
                </li>
            ))}
        </ul>

        <h2>Object Hit Points</h2>
        <ul>
            {OBJECT_BREAK_HP_INFO.map(item => (
                <li key={item.text}>
                    <span>{item.text}</span> <span>{item.fragile}</span> <span>{item.resilient}</span>
                </li>
            ))}
        </ul>
        <p></p>
    </Layout>
);

export default DifficultyPage;
