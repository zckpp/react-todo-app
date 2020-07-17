import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo'
import { loadTodos, titleUpdate, bodyUpdate, setCompleteTodo } from './thunks';

class TodoList extends Component {
  componentDidMount() {
    const { onLoadTodos } = this.props;
		onLoadTodos();
  }

	render() {
		const { onTitleUpdate, onBodyUpdate, onSetComplete, todos = [], isLoading } = this.props;
		return (
			<main>
				<div className="List">
					{
						isLoading === true
						? <h3>Loading...</h3>
						: todos.map(todo =>
								<Todo key={todo._id} data={todo}
									handleTitleUpdate={onTitleUpdate}
									handleBodyUpdate={onBodyUpdate}
									handleSetComplete={onSetComplete}
								/>
						  )}
				</div>
			</main>
		);
	}
}

const mapStateToProps = state => ({
  todos: state.todos.data,
  isLoading: state.todos.isLoading
});

const mapDispatchToProps = dispatch => ({
	onLoadTodos: () => dispatch(loadTodos()),
	onTitleUpdate: (title, id) => dispatch(titleUpdate(title, id)),
	onBodyUpdate: (body, id) => dispatch(bodyUpdate(body, id)),
	onSetComplete: (id) => dispatch(setCompleteTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);