import React, { useState } from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { addTodo } from './thunks';

function AddTodo({ onAddTodo }) {
	const [show, setShow] = useState(false);
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	return (
		<div className="Modal-wrapper">
				<Modal
						open={show}
						onClose={() => setShow(false)}
				>
						<div className="Modal-body">
							<h2>Add a new Todo item</h2>
							<form noValidate autoComplete="off">
								<Grid item xs={12}>
									<TextField 
										className="input-text" 
										id="create-title" 
										label="Title" 
										value={title}
										onChange={(e) => setTitle(e.target.value)} 
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										className="input-text"
										id="create-body"
										label="Body"
										multiline
										rows={4}
										variant="outlined"
										value={body}
										onChange={(e) => setBody(e.target.value)} 
									/>
								</Grid>
								<Button
									variant="contained"
									color="primary"
									size="large"
									startIcon={<SaveIcon />}
									onClick={() => {
										onAddTodo(title, body);
										setTitle('');
										setBody('');
									}}
								>
								Save
								</Button>
							</form>
						</div>
				</Modal>
				<IconButton onClick={() => setShow(true)} className="Modal-button">
					<PostAddIcon></PostAddIcon>
				</IconButton>
		</div>
	);
    
}
  
const mapDispatchToProps = dispatch => ({
    onAddTodo: (title, body) => dispatch(addTodo(title, body))
});

export default connect(null, mapDispatchToProps)(AddTodo);