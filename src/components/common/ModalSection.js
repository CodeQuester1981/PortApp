import React, { Component } from 'react';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

class ModalSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.openModal.bind(this)
    }
    
    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <React.Fragment>
                video pending
            </React.Fragment>
        );
    }
}

export default ModalSection;