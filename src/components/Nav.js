import React, { Component } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { viewIncompleteTodos, viewCompleteTodos } from './actions';
import { connect } from 'react-redux';

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = { show: false };
	}

	toggleNav = () => {
		this.state.show ? this.setState({ show: false }) : this.setState({ show: true });
	}

	render() {
		const { onViewIncomlete, onViewComlete } = this.props;
		return (
			<aside>
				<div className="Nav">
					<SwipeableDrawer
						anchor="left"
						open={this.state.show}
						onClose={this.toggleNav}
						onOpen={this.toggleNav}
						onClick={this.toggleNav}
					>
						<AssignmentIcon onClick={onViewIncomlete} className="Drawer-button"></AssignmentIcon>
						<AssignmentTurnedInIcon onClick={onViewComlete} className="Drawer-button"></AssignmentTurnedInIcon>
					</SwipeableDrawer>
					<MenuIcon onClick={this.toggleNav} className="Nav-button"></MenuIcon>
				</div>
			</aside>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	onViewIncomlete: () => dispatch(viewIncompleteTodos()),
	onViewComlete: () => dispatch(viewCompleteTodos())
});
export default connect(null, mapDispatchToProps)(Nav);