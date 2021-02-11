import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    marginBottom: "50px",
    padding: "0px"
  },
  closeButton: {
    float: 'right',
  },
  list: {
    marginBottom: "0px",
    padding: "0px"
  },
});

const ResultCard = props => {
    const classes = useStyles();
    const { reset, data } = props;
    const [result, setResult] = useState(data);

    const closeResult = () => {
        reset();
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <div>
                    <Typography gutterBottom variant="h6" component="h6">
                        Calculated Payment

                        <Tooltip title="Close">
                            <IconButton aria-label="close" className={classes.closeButton}>
                                <HighlightOffIcon onClick={closeResult} />
                            </IconButton>
                        </Tooltip>
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary" component="span">
                    <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    className={classes.list}
                    >
                        <ListItem>
                            <ListItemText primary="Biweekly" /> {result.biweekly}
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Weekly" /> {result.weekly}
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Monthly" /> {result.monthly}
                        </ListItem>
                    </List>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default ResultCard; 