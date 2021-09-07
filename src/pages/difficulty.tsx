import '../styles/style.scss';

import * as React from 'react';

import Layout from '../layout/page-layout';
import { Link } from 'gatsby';
import { DC_STANDARD, DC_TRACKING, DC_TOOLS } from '../data/difficulty-data';

const DifficultyPage = (): React.ReactElement => {
    return (
        <Layout>
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

            <h2>Tool Kit DCs</h2>
            <div>
                {DC_TOOLS.map(tool => (
                    <div key={tool.name}>
                        <h2>{tool.name}</h2>
                        <ul>
                            {tool.dcs.map((dc, index) => (
                                <li key={index}>
                                    <span>
                                        {dc.text} {dc.difficulty}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default DifficultyPage;
