import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false };
    }

    handleExpend = () => {
        this.state.expanded ? this.setState({ expanded: false }) : this.setState({ expanded: true });
    }

    render() {
        return (
            <div className="ListItem">
                <Card className="Card">
                    <CardHeader
                        className="Card-header"
                        title="My stuff to do"
                        subheader="September 14, 2020"
                    />
                    <CardActions disableSpacing className="Card-action">
                        <IconButton                                 
                            onClick={this.handleExpend}
                            aria-expanded={this.state.expanded}
                            aria-label="show more">
                            <ExpandMoreRoundedIcon className={this.state.expanded ? "expandOpen" : "expand"} />
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit className="Card-content">
                        <CardContent>
                            <p>
                                I need to do some stuff.
                            </p>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        );
    }
}

export default ListItem;