import React from 'react';
import './Toolbar.css'
import DrawerTogglebutton from '../SideDrawer/DrawerToggleButton'
import drawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (
    <header className='toolbar'>
        <nav className='toobar__navigation'>
            <div>
                <DrawerTogglebutton />
            </div>
            <div className='toobar__logo'><a href='/'>The Logo</a></div>
            <div className='spacer' />
            <div className='toolbar__navigation-items'>
                <ul>
                    <li><a href='/'>Products</a></li>
                    <li><a href='/'>Users</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;