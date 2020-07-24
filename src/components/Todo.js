import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import Collapse from '@material-ui/core/Collapse';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ContentEditable from 'react-contenteditable'

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  handleExpend = () => {
    this.state.expanded ? this.setState({ expanded: false }) : this.setState({ expanded: true });
  }

  handleTitleUpdate = (e) => {
    if (e.target.innerText !== this.props.data.title)
      this.props.handleTitleUpdate(e.target.innerText, this.props.data);
  }

  handleBodyUpdate = (e) => {
    if (e.target.innerText !== this.props.data.body)
      this.props.handleBodyUpdate(e.target.innerText, this.props.data);
  }

  handleSetComplete = () => {
    this.props.handleSetComplete(this.props.data._id);
  }

  handleDelete = () => {
    this.props.handleDelete(this.props.data._id);
  }

  render() {
    const { data, showCompleted } = this.props;
    return (
      <div className="ListItem">
        <Card className="Card">
          <div className="Card-header">
            {/* card title and date */}
            <ContentEditable
              html={data.title} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onBlur={this.handleTitleUpdate} // handle innerHTML change
              tagName='h2' // Use a custom HTML tag (uses a div by default)
            />
            <div>{data.createdAt}</div>
          </div>
          <CardActions disableSpacing className="Card-action">
            <IconButton
              onClick={this.handleExpend}
              aria-expanded={this.state.expanded}
              aria-label="show more">
              <ExpandMoreRoundedIcon className={this.state.expanded ? "expandOpen" : "expand"} />
            </IconButton>
            {
              showCompleted === false
              ? <IconButton
                  onClick={this.handleSetComplete}
                  aria-label="complete">
                  <DoneIcon />
                </IconButton>
              : <IconButton
                  onClick={this.handleDelete}
                  aria-label="delete">
                <DeleteIcon />
            </IconButton>
            }
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit className="Card-content">
            {/* card body text */}
            <CardContent>
              <ContentEditable
                html={data.body} // innerHTML of the editable div
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

export default Todo;