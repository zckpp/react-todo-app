import React, { Component } from 'react';
import NoteListItem from './NoteListItem'

class NoteList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<main>
				<div className="List">
					{this.props.listData.map(listItemData =>
						<NoteListItem key={listItemData.nid} listItemData={listItemData}
							handleTitleUpdate={this.props.handleTitleUpdate}
							handleBodyUpdate={this.props.handleBodyUpdate} // pass the edit request to top level component 
						/>
					)}
				</div>
			</main>
		);
	}
}

export default NoteList;