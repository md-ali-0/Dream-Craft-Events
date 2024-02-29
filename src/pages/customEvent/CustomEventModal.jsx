import { Fragment } from 'react';

const CustomEventModal = ({ showModal, children }) => {

    if (!showModal) {
        return null;
    }   

    return (

        <Fragment>
            {children}
        </Fragment>

    );
};

export default CustomEventModal;