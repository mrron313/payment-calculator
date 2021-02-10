import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
        },
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

export default function Form() {
  const classes = useStyles();
  const handleFormSubmit = () => {
    console.log("Submit");
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="price"
            name="price"
            label="Price"
            fullWidth
            autoComplete="price"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="tradein_value"
            name="tradein_value"
            label="Trade-in Value"
            fullWidth
            autoComplete="tradein_value"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="tradein_owing"
            name="tradein_owing"
            label="Trade-in Owing"
            fullWidth
            autoComplete="tradein_owing"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="tax_rate"
            name="tax_rate"
            label="Tax Rate"
            fullWidth
            autoComplete="tax_rate"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="interest_rate"
            name="interest_rate"
            label="Interest Rate"
            fullWidth
            autoComplete="sinterest_rate"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
            <Button onClick={handleFormSubmit} className={classes.button} variant="contained" color="primary">
                Calculate
            </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}