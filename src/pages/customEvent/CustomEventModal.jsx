import { Fragment } from 'react';

const CustomEventModal = ({ isVisible, children }) => {

    if (!isVisible) {
        return null;
    }   

    return (

        <Fragment>
            {children}
        </Fragment>

    );
};

export default CustomEventModal;