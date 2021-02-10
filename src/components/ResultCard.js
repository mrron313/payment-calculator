import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    marginBottom: "30px",
    padding: "0px"
  },
  closeButton: {
    float: 'right',
  }
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
                    <Typography gutterBottom variant="h5" component="h6">
                        Calculated Payment
                        
                        <IconButton aria-label="close" className={classes.closeButton}>
                            <HighlightOffIcon onClick={closeResult} />
                        </IconButton>
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary" component="span">
                    <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    className={classes.root}
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