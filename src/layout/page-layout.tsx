import * as React from 'react';

import Navigation from './navigation';

type LayoutType = {
    children: React.ReactElement[];
};

export default function Layout({ children }: LayoutType): React.ReactElement {
    return (
        <div className="content">
            <Navigation />
            <main className="page-styles">{children}</main>
        </div>
    );
}
