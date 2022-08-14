import '../styles/style.scss';

import * as React from 'react';

// markup
const NotFoundPage = (): React.ReactElement => {
    return (
        <main>
            <title>Not found</title>
            <h1>Page not found</h1>
            <p>
                Sorry
                <span role="img" aria-label="Pensive emoji">
                    😔
                </span>
                we couldn’t find what you were looking for.
                <br />
                {/* eslint-disable-next-line no-undef */}
                {process.env.NODE_ENV === 'development' ? (
                    <>
                        <br />
                        Try creating a page in <code>src/pages/</code>.
                        <br />
                    </>
                ) : null}
                <br />
                {/* <Link to="/">Go home</Link>. */}
            </p>
        </main>
    );
};

export default NotFoundPage;
