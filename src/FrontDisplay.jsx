import React from 'react';
import PropTypes from 'prop-types';
import CoffeeMug from './CoffeeMug';
import FrontContent from './FrontContent';


const propTypes = {
    showMobile: PropTypes.bool,
};

const defaultProps = {
    showMobile: false,
};

const FrontDisplay = ({
    showMobile = false,
}) => {
    return (
        <div className='h-[100vh] w-full flex justfity-center align-center top-0 left-0 absolute'>
            {showMobile ? <></> : <CoffeeMug />}
            <FrontContent showMobile={showMobile} />
        </div>
    );
}

FrontDisplay.propTypes = propTypes;
FrontDisplay.default = defaultProps;

export default FrontDisplay;