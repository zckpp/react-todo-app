import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { addTodo } from './thunks';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false, title: '', body: '' };
    }

    handleOpen = () => {
        this.setState({ show: true });
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    handleTitleChange = (e) => {
			this.setState({title: e ? e.target.value : ''});
		}

		handleBodyChange = (e) => {
			this.setState({body: e ? e.target.value : ''});
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
                      <form noValidate autoComplete="off">
												<Grid item xs={12}>
													<TextField 
														className="input-text" 
														id="create-title" 
														label="Title" 
														value={this.state.title}
														onChange={this.handleTitleChange} 
													/>
												</Grid>
												<Grid item xs={12}>
													<TextField
														value={this.state.body}
														className="input-text"
														id="create-body"
														label="Body"
														multiline
														rows={4}
														variant="outlined"
														onChange={this.handleBodyChange}
													/>
												</Grid>
												<Button
													variant="contained"
													color="primary"
													size="large"
													startIcon={<SaveIcon />}
													onClick={() => {
														this.props.onAddTodo(this.state.title, this.state.body)
													}}
												>
												Save
												</Button>
                      </form>
                    </div>
                </Modal>
                <IconButton onClick={this.handleOpen} className="Modal-button">
                  <PostAddIcon></PostAddIcon>
                </IconButton>
            </div>
        );
    }
}
  
const mapDispatchToProps = dispatch => ({
    onAddTodo: (title, body) => dispatch(addTodo(title, body))
});

export default connect(null, mapDispatchToProps)(AddTodo);