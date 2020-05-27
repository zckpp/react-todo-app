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
                    {this.props.listData.map(listItemData => 
                        <ListItem key={listItemData.nid} listItemData={listItemData} 
                            handleTitleUpdate={this.props.handleTitleUpdate}/>
                        )}
                </div>
            </main>
        );
    }
}

export default List;