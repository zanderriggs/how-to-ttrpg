import '../styles/style.scss';

import * as React from 'react';

import Layout from '../layout/page-layout';
import { Link } from 'gatsby';

// data
const links = [
    {
        text: 'How To Grapple',
        url: '/grapple',
        badge: false,
        description:
            "Grappling is fun and cool. It's fairly straight-forward, but sometimes we just have to make sure we remember how it works.",
        color: '#E95800',
    },
    {
        text: 'Conditions',
        url: '/conditions',
        badge: true,
        description: "There's a lot of conditions that a character can be subject to. Find them here.",
        color: '#1099A8',
    },
    {
        text: 'Measuring Skill DCs',
        url: '/difficulty',
        badge: true,
        description: "We all think we have an idea of what's difficult. But what's a challege?",
        color: '#1099A8',
    },
];

// markup
const IndexPage = (): React.ReactElement => (
    <Layout>
        <title>Home Page</title>
        <h1>How To TTRPG</h1>
        <h2 className="reference-title">
            — A Reference Guide to <br /> ~Doing Things~
        </h2>
        <h3>
            <Link to="/about">About</Link>
        </h3>
        <p>
            I just adjusted the auto-generated index.js file to be a super simple example of what the main page could
            look like. idk if we want to have all the info here or link to other pages/domains. But I figured we'd just
            start the thing.
        </p>
        <ul>
            {links.map(link => (
                <li key={link.url} style={{ color: link.color }}>
                    <span>
                        <a href={link.url}>{link.text}</a>
                        {link.badge && (
                            <span className="new-badge" aria-label="New Badge">
                                NEW!
                            </span>
                        )}
                        <p className="description">{link.description}</p>
                    </span>
                </li>
            ))}
        </ul>
    </Layout>
);

export default IndexPage;
