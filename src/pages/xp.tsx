import * as React from 'react';

import Layout from '../layout/page-layout';
import { XP_DATA } from '../data/xp-data';
import { XpLevelType } from '../types/xp-types';

const XpPage = (): React.ReactElement => {
    return (
        <Layout>
            <title>XP Progression Table</title>
            <p>
                The Character Advancement table summarizes the XP you need to advance in levels from level 1 through
                level 20, and the proficiency bonus for a character of that level. Consult the information in your
                character's class description to see what other improvements you gain at each level.
            </p>
            <table className="xp-table">
                <thead>
                    <th>XP</th>
                    <th>Level</th>
                    <th>Prof. Bonus</th>
                </thead>
                <tbody>
                    {XP_DATA.map((level: XpLevelType) => (
                        <tr key={level.level} className={`tier-${level.tier}`} title={`Tier ${level.tier}`}>
                            <td>{level.xp}</td>
                            <td>{level.level}</td>
                            <td>{level.proficiency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    );
};

export default XpPage;
