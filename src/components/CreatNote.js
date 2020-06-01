import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import PostAddIcon from '@material-ui/icons/PostAdd';

class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
    }

    handleOpen = () => {
        console.log('dude');
        this.setState({ show: true });
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    render() {
        return (
            <div className="Modal-wrapper">
                <Modal
                    open={this.state.show}
                    onClose={this.handleClose}
                >
                    <div className="Modal-body">
                      <h2>Add a new Todo item</h2>
                    </div>
                </Modal>
                <IconButton onClick={this.handleOpen} className="Modal-button">
                  <PostAddIcon></PostAddIcon>
                </IconButton>
            </div>
        );
    }
}

export default CreateNote;