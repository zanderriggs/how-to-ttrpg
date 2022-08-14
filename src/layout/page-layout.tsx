import * as React from 'react';

type LayoutType = {
    children: React.ReactElement[];
};

export default function Layout({ children }: LayoutType): React.ReactElement {
    return (
        <div className="content">
            <main className="page-styles">{children}</main>
        </div>
    );
}
