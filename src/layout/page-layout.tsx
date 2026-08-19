import * as React from 'react';

import { Outlet } from 'react-router-dom';

import styles from './page-layout.module.scss';

export default function Layout(): React.ReactElement {
  return (
    <div className={styles.content}>
      <main className={styles.pageStyles}>
        <Outlet />
      </main>
    </div>
  );
}
