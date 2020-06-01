import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ContentEditable from 'react-contenteditable'

class NoteListItem extends Component {
  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();
    this.state = { expanded: false };
  }

  handleExpend = () => {
    this.state.expanded ? this.setState({ expanded: false }) : this.setState({ expanded: true });
  }

  handleTitleUpdate = (e) => {
    this.props.handleTitleUpdate(e.target.innerText, this.props.listItemData.nid);
  }

  handleBodyUpdate = (e) => {
    this.props.handleBodyUpdate(e.target.innerText, this.props.listItemData.nid);
  }

  render() {
    return (
      <div className="ListItem">
        <Card className="Card">
          <div className="Card-header">
            {/* card title and date */}
            <ContentEditable
              innerRef={this.contentEditable}
              html={this.props.listItemData.title} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onBlur={this.handleTitleUpdate} // handle innerHTML change
              tagName='h2' // Use a custom HTML tag (uses a div by default)
            />
            <div>{this.props.listItemData.date}</div>
          </div>
          <CardActions disableSpacing className="Card-action">
            <IconButton
              onClick={this.handleExpend}
              aria-expanded={this.state.expanded}
              aria-label="show more">
              <ExpandMoreRoundedIcon className={this.state.expanded ? "expandOpen" : "expand"} />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit className="Card-content">
            {/* card body text */}
            <CardContent>
              <ContentEditable
                innerRef={this.contentEditable}
                html={this.props.listItemData.body} // innerHTML of the editable div
                disabled={false}       // use true to disable editing
                onBlur={this.handleBodyUpdate} // handle innerHTML change
                className="Card-content-text"
              />
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

export default NoteListItem;