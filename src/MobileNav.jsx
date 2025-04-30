import React from 'react';
import PropTypes from 'prop-types';
import MobileNavBar from './MobileNavBar';
import DarkModeToggle from './DarkModeToggle';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const MobileNav = () => {
    return (
        <>
            <MobileNavBar />
            <DarkModeToggle showMobile={true} />
        </>
    );
}

MobileNav.propTypes = propTypes;
MobileNav.default = defaultProps;
// #endregion

export default MobileNav;