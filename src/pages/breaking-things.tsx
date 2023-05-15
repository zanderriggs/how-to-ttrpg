import * as React from 'react';

import styles from './break-things.module.scss';

import { OBJECT_BREAK_AC_INFO, OBJECT_BREAK_HP_INFO } from '../data/breaking-things-data';

const BreakingThings = (): React.ReactElement => (
  <>
    <title>Breaking Things</title>
    <h1>Breaking Things</h1>
    {/* <h2>
            <Link to="/">Home</Link>
        </h2> */}
    <h2>Object Armor Class</h2>
    <table>
      <tbody>
        <tr>
          <td>Material</td>
          <td>AC</td>
        </tr>
        {OBJECT_BREAK_AC_INFO.map(item => (
          <tr key={item.text}>
            <td className={styles.breakTableCell}>
              <span>{item.text}</span>
            </td>
            <td className={styles.breakTableCell}>
              <span>{item.ac}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <h2>Object Hit Points</h2>
    <table>
      <tbody>
        <tr>
          <td>Object Size</td>
          <td>Fragile</td>
          <td>Resilient</td>
        </tr>
        {OBJECT_BREAK_HP_INFO.map(item => (
          <tr key={item.text}>
            <td className={styles.breakTableCell}>
              <span>{item.text}</span>
            </td>
            <td className={styles.breakTableCell}>
              <span>
                {item.fragile.avg}({item.fragile.die.num}d{item.fragile.die.sides})
              </span>
            </td>
            <td className={styles.breakTableCell}>
              {item.resilient.avg}({item.resilient.die.num}d{item.resilient.die.sides})
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default BreakingThings;
