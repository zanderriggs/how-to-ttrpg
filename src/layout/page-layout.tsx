import * as React from 'react';

import { Outlet } from 'react-router-dom';

type LayoutType = {
    children: React.ReactElement[];
};

export default function Layout(): React.ReactElement {
    return (
        <div className="content">
            <main className="page-styles">
                <Outlet />
            </main>
        </div>
    );
}
