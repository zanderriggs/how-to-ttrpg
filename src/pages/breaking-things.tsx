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
        <tbody>
            <tr>
                <td>Material</td>
                <td>AC</td>
            </tr>
            {OBJECT_BREAK_AC_INFO.map(item => (
                <tr key={item.text}>
                    <td className="break-table-cell">
                        <span>{item.text}</span>
                    </td>
                    <td className="break-table-cell">
                        <span>{item.ac}</span>
                    </td>
                </tr>
            ))}
        </tbody>

        <h2>Object Hit Points</h2>
        <tbody>
            <tr>
                <td>Object Size</td>
                <td>Fragile</td>
                <td>Resilient</td>
            </tr>
            {OBJECT_BREAK_HP_INFO.map(item => (
                <tr key={item.text}>
                    <td className="break-table-cell">
                        <span>{item.text}</span>
                    </td>
                    <td className="break-table-cell">
                        <span>
                            {item.fragile.avg}({item.fragile.die.num}d{item.fragile.die.sides})
                        </span>
                    </td>
                    <td className="break-table-cell">
                        {item.resilient.avg}({item.resilient.die.num}d{item.resilient.die.sides})
                    </td>
                </tr>
            ))}
        </tbody>
        <p></p>
    </Layout>
);

export default DifficultyPage;
