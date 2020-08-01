import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import Collapse from '@material-ui/core/Collapse';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ContentEditable from 'react-contenteditable'

function Todo({ data, showCompleted, handleTitleUpdate, handleBodyUpdate, handleSetComplete, handleDelete }) {
  const [expanded, setExpanded] = useState(false);

  const onHandleTitleUpdate = (e) => {
    if (e.target.innerText !== data.title)
      handleTitleUpdate(e.target.innerText, data);
  }

  const onHandleBodyUpdate = (e) => {
    if (e.target.innerText !== data.body)
      handleBodyUpdate(e.target.innerText, data);
  }

  const onHandleSetComplete = () => {
    handleSetComplete(data._id);
  }

  const onHandleDelete = () => {
    handleDelete(data._id);
  }

  return (
    <div className="ListItem">
      <Card className="Card">
        <div className="Card-header">
          {/* card title and date */}
          <ContentEditable
            html={data.title} // innerHTML of the editable div
            disabled={false}       // use true to disable editing
            onBlur={(e) => onHandleTitleUpdate(e)} // handle innerHTML change
            tagName='h2' // Use a custom HTML tag (uses a div by default)
          />
          <div>{data.createdAt}</div>
        </div>
        <CardActions disableSpacing className="Card-action">
          <IconButton
            onClick={() => setExpanded(expanded ? false : true)}
            aria-expanded={expanded}
            aria-label="show more">
            <ExpandMoreRoundedIcon className={expanded ? "expandOpen" : "expand"} />
          </IconButton>
          {
            showCompleted === false
            ? <IconButton
                onClick={() => onHandleSetComplete()}
                aria-label="complete">
                <DoneIcon />
              </IconButton>
            : <IconButton
                onClick={() => onHandleDelete()}
                aria-label="delete">
              <DeleteIcon />
          </IconButton>
          }
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit className="Card-content">
          {/* card body text */}
          <CardContent>
            <ContentEditable
              html={data.body} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onBlur={(e) => onHandleBodyUpdate(e)} // handle innerHTML change
              className="Card-content-text"
            />
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

export default Todo;