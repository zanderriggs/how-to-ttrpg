import * as React from 'react';
import { Link } from 'gatsby';
import '../styles/style.scss';

const GrapplePage = () => {
    return (
        <main>
            <title>How To Grapple</title>
            <h1>How to Grapple</h1>
            <h2>
                <Link to="/">Home</Link>
            </h2>
            <p>This is where we talk about how to grapple.</p>
            <p>It's a contested roll. Athletics (Aggressor) vs Athletics or Acrobatics (Defender)</p>

        </main>
    );
};

export default GrapplePage;
