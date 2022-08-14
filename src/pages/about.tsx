import '../styles/style.scss';

import * as React from 'react';

import Layout from '../layout/page-layout';

const AboutPage = (): React.ReactElement => {
    return (
        <Layout>
            <title>About</title>
            <h1>About How To TTRPG</h1>
            {/* <h2>
                <Link to="/">Home</Link>
            </h2> */}
            <p>We're doing shit here.</p>
        </Layout>
    );
};

export default AboutPage;
