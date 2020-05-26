import React, { Component } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
    }

    toggleNav = () => {
        this.state.show ? this.setState({ show: false }) : this.setState({ show: true });
    }

    render() {
        return (
            <aside>
                <div className="Nav">
                    <SwipeableDrawer
                        anchor="left"
                        open={this.state.show}
                        onClose={this.toggleNav}
                        onOpen={this.toggleNav}
                    >Dude!</SwipeableDrawer>
                    <MenuIcon onClick={this.toggleNav} className="Nav-button"></MenuIcon>
                </div>
            </aside>
        );
    }
}

export default Nav;