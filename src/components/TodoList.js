import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo'
import { loadTodos, titleUpdate, bodyUpdate, setCompleteTodo } from './thunks';
import { getIsLoading, getCompletedTodos, getIncompleteTodos, getShowCompleted } from './selectors';

class TodoList extends Component {
  componentDidMount() {
    const { onLoadTodos } = this.props;
		onLoadTodos();
  }

	render() {
		const { onTitleUpdate, onBodyUpdate, onSetComplete, incompleteTodos = [], completedTodos = [], isLoading, showCompleted } = this.props;
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
										/>
										)
									: completedTodos.map(todo =>
										<Todo key={todo._id} data={todo}
											handleTitleUpdate={onTitleUpdate}
											handleBodyUpdate={onBodyUpdate}
											handleSetComplete={onSetComplete}
										/>
										)
								}
							</div>
					}
				</div>
			</main>
		);
	}
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
	onSetComplete: (id) => dispatch(setCompleteTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);