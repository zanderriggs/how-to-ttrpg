import '../styles/style.scss';

import * as React from 'react';

import Layout from '../layout/page-layout';

const GrapplePage = (): React.ReactElement => {
    return (
        <Layout>
            <title>How To Grapple</title>
            <h1>How to Grapple</h1>
            {/* <h2>
                <Link to="/">Home</Link>
            </h2> */}
            <p>This is where we talk about how to grapple.</p>
            <p>It's a contested roll. Athletics (Aggressor) vs Athletics or Acrobatics (Defender)</p>
        </Layout>
    );
};

export default GrapplePage;
