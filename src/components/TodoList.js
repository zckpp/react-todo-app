import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo'
import ConfirmModal from './ConfirmModal'
import { loadTodos, titleUpdate, bodyUpdate, setCompleteTodo, deleteTodoByID } from './thunks';
import { getIsLoading, getCompletedTodos, getIncompleteTodos, getShowCompleted } from './selectors';

function TodoList ({ 
	onLoadTodos, 
	onTitleUpdate, 
	onBodyUpdate, 
	onSetComplete, 
	onDelete, 
	incompleteTodos = [], 
	completedTodos = [], 
	isLoading, 
	showCompleted }) {
	
	const [showModal, setShowModal] = useState(false);
	const [modalMessage, setModalMessage] = useState('');	
	const [modalTodoId, setModalTodoId] = useState('');
	const [modalAction, setModalAction] = useState('');

	// load todos
	useEffect(() => {
    onLoadTodos();
  }, []);

	const onHandleSetComplete = (id) => {
		setModalTodoId(id);
		setShowModal(true);
		setModalMessage('Are you sure to complete?');
		setModalAction('complete');
	}

	const onHandleDelete = (id) => {
		setModalTodoId(id);
		setShowModal(true);
		setModalMessage('Are you sure to delete?');
		setModalAction('delete');
	}

	const onHandleModalConfirm = () => {
		if ('complete' === modalAction) onSetComplete(modalTodoId);
		else if ('delete' === modalAction) onDelete(modalTodoId);
		setShowModal(false);
	}

	return (
		<main>
			<div className="List">
				{
					isLoading === true
					? <h3>Loading...</h3>
					: <div className={showCompleted === false ? 'List-Incomplete' : 'List-Complete'}>
							{
								showCompleted === false
								? incompleteTodos.map(todo =>
									<Todo key={todo._id} data={todo}
										handleTitleUpdate={onTitleUpdate}
										handleBodyUpdate={onBodyUpdate}
										handleSetComplete={id => onHandleSetComplete(id)}
										handleDelete={id => onHandleDelete(id)}
										showCompleted={showCompleted}
									/>
									)
								: completedTodos.map(todo =>
									<Todo key={todo._id} data={todo}
										handleTitleUpdate={onTitleUpdate}
										handleBodyUpdate={onBodyUpdate}
										handleSetComplete={id => onHandleSetComplete(id)}
										handleDelete={id => onHandleDelete(id)}
										showCompleted={showCompleted}
									/>
									)
							}
						</div>
				}
				<ConfirmModal show={showModal} close={() => setShowModal(false)} message={modalMessage} confirm={() => onHandleModalConfirm()} />	
			</div>
		</main>
	);
}

const mapStateToProps = state => ({
  incompleteTodos: getIncompleteTodos(state),
  completedTodos: getCompletedTodos(state),
	isLoading: getIsLoading(state),
	showCompleted: getShowCompleted(state)
});

const mapDispatchToProps = dispatch => ({
	onLoadTodos: () => dispatch(loadTodos()),
	onTitleUpdate: (title, todo) => dispatch(titleUpdate(title, todo)),
	onBodyUpdate: (body, todo) => dispatch(bodyUpdate(body, todo)),
	onSetComplete: (id) => dispatch(setCompleteTodo(id)),
	onDelete: (id) => dispatch(deleteTodoByID(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);