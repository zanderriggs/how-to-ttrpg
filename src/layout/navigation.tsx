import * as React from 'react';

import { Link, StaticQuery, graphql } from 'gatsby';

import { Bars } from '../icons/bars';
import { XClose } from '../icons/x-close';
import { useState } from 'react';

const Navigation = (): React.ReactElement => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const extraClasses = showMenu ? 'show-menu' : 'hide-menu';

    return (
        <nav className="navigation">
            <button onClick={() => setShowMenu(true)}>
                <Bars />
            </button>
            <StaticQuery
                query={graphql`
                    query SiteQuery {
                        site {
                            siteMetadata {
                                menuLinks {
                                    name
                                    link
                                }
                            }
                        }
                    }
                `}
                render={data => (
                    <ul className={`navigation-list ${extraClasses}`}>
                        {data.site.siteMetadata.menuLinks.map(link => (
                            <li className="nav-item" onClick={() => setShowMenu(false)} key={link.name}>
                                <Link to={link.link}>{link.name}</Link>
                            </li>
                        ))}
                        <li className="nav-close">
                            <button onClick={() => setShowMenu(false)}>
                                <XClose />
                            </button>
                        </li>
                    </ul>
                )}
            />
        </nav>
    );
};
export default Navigation;
