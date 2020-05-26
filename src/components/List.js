import React, { Component } from 'react';
import ListItem from './ListItem'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
    }

    render() {
        return (
            <main>
                <div className="List">
                    <ListItem />
                </div>
            </main>
        );
    }
}

export default List;