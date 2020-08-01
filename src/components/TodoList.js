import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo'
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
	
	// load todos
	useEffect(() => {
    onLoadTodos();
  }, []);

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
										handleSetComplete={onSetComplete}
										handleDelete={onDelete}
										showCompleted={showCompleted}
									/>
									)
								: completedTodos.map(todo =>
									<Todo key={todo._id} data={todo}
										handleTitleUpdate={onTitleUpdate}
										handleBodyUpdate={onBodyUpdate}
										handleSetComplete={onSetComplete}
										handleDelete={onDelete}
										showCompleted={showCompleted}
									/>
									)
							}
						</div>
				}
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