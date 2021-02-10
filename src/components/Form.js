import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import ErrorCard from './ErrorCard';
import ResultCard from './ResultCard';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: "#53ade0";
`;

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
        marginLeft: theme.spacing(2),
        backgroundColor: "#53ade0"
    },
    buttonClose: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(2),
    },
    resultCard: {
      marginBottom: "20px"
    },
}));

export default function Form() {
  const classes = useStyles();
  let [loading, setLoading] = useState(false);
  let [result, setResult] = useState({});
  let [formFields, setFormFields] = useState(["price", "tradein_value", "tradein_owing", "term_months", "down_payment", "tax_rate", "interest_rate"]);
  let [isApiCalledSuccessfull, setIsApiCallSuccessfull] = useState(null);
  let [formData, setFormData] = useState({
    price: null,
    tradein_value: 0,
    tradein_owing: 0,
    term_months: null,
    down_payment: null,
    tax_rate: null,
    interest_rate: null,
  });
  let [isError, setIsError] = useState({
    price: { error: false, helperText: ""},
    tradein_value: { error: false, helperText: ""},
    tradein_owing: { error: false, helperText: ""},
    term_months: { error: false, helperText: ""},
    down_payment: { error: false, helperText: ""},
    tax_rate: { error: false, helperText: ""},
    interest_rate: { error: false, helperText: ""},
  });

  function isNumeric(value) {
    return /^-?\d+$/.test(value);
  }

  const validateForm = () => {
    let validated = true;
    let currentErrorState = isError;
    
    for (let i=0; i< formFields.length; i++) {
      let required = false;
      if (formData[formFields[i]] === null || formData[formFields[i]] === "") {
        currentErrorState = {
          ...currentErrorState,
          [formFields[i]]: {
            error: true,
            helperText: "Required",
          },
        };
        setIsError(currentErrorState);
        validated = false;
        required = true;
      } 
      if (!isNumeric(formData[formFields[i]]) && !required && formData[formFields[i]] !== "0" ){
        currentErrorState = {
          ...currentErrorState,
          [formFields[i]]: {
            error: true,
            helperText: "The value of this field must be number",
          },
        };
        setIsError(currentErrorState);
        validated = false;
      }
    }

    return validated;
  }
  
  const handleFormSubmit = () => {
    if ( validateForm() === true) {
      setLoading(true);
      setIsApiCallSuccessfull(null);
  
      axios.get('http://api.pickuptruckloans.com/get_truck_payment', {
        params: {
          price: formData.price,
          tradein_value: formData.tradein_value,
          tradein_owing: formData.tradein_owing,
          term_months: formData.term_months,
          down_payment: formData.down_payment,
          tax_rate: formData.tax_rate,
          interest_rate: formData.interest_rate,
        }
      })
      .then(function (response) {
        setResult(response.data);
        setLoading(false);
        setIsApiCallSuccessfull(true);
      }).catch(function (err) {
        console.log(err);
        setLoading(false);
        setIsApiCallSuccessfull(false);
      })
    }
  };

  const reset = () => {
    setResult({});
    setIsApiCallSuccessfull(null);
  }

  const handleReset = () => {
    setFormData({
      price: null,
      tradein_value: 0,
      tradein_owing: 0,
      term_months: null,
      down_payment: null,
      tax_rate: null,
      interest_rate: null,
    });
  }

  const handleInputFormChange = e => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    });
    isError[e.target.name].error = false;
    isError[e.target.name].helperText = "";
  }

  return (
    <React.Fragment>
      <ClipLoader color={"#53ade0"} loading={loading} css={override} size={150} />
      { (isApiCalledSuccessfull === true && isApiCalledSuccessfull !== null) && <ResultCard data={result} reset={reset} /> }
      { (isApiCalledSuccessfull === false && isApiCalledSuccessfull !== null) && <ErrorCard /> }

      <Typography variant="h6" gutterBottom>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            error={isError.price.error}
            helperText={isError.price.helperText}
            required
            id="price"
            key="price"
            name="price"
            label="Price ($)"
            fullWidth
            value={formData.price || ""}
            autoComplete="price"
            onChange={e => handleInputFormChange(e)}
            prefix="$"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            error={isError.tradein_value.error}
            helperText={isError.tradein_value.helperText}
            required
            id="tradein_value"
            name="tradein_value"
            label="Trade-in Value ($)"
            fullWidth
            value={formData.tradein_value || 0}
            autoComplete="tradein_value"
            onChange={e => handleInputFormChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            error={isError.tradein_owing.error}
            helperText={isError.tradein_owing.helperText}
            required
            id="tradein_owing"
            name="tradein_owing"
            label="Trade-in Owing ($)"
            fullWidth
            value={formData.tradein_owing || 0}
            autoComplete="tradein_owing"
            onChange={e => handleInputFormChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            error={isError.down_payment.error}
            helperText={isError.down_payment.helperText}
            required
            id="down_payment"
            name="down_payment"
            label="Down Payment ($)"
            fullWidth
            value={formData.down_payment || ""}
            autoComplete="down_payment"
            onChange={e => handleInputFormChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            error={isError.term_months.error}
            helperText={isError.term_months.helperText}
            required
            id="term_months"
            name="term_months"
            label="Term Months"
            fullWidth
            value={formData.term_months || ""}
            autoComplete="term_months"
            onChange={e => handleInputFormChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            error={isError.tax_rate.error}
            helperText={isError.tax_rate.helperText}
            required
            id="tax_rate"
            name="tax_rate"
            label="Tax Rate (%)"
            fullWidth
            value={formData.tax_rate || ""}
            autoComplete="tax_rate"
            onChange={e => handleInputFormChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            error={isError.interest_rate.error}
            helperText={isError.interest_rate.helperText}
            required
            id="interest_rate"
            name="interest_rate"
            label="Interest Rate (%)"
            fullWidth
            value={formData.interest_rate || ""}
            autoComplete="interest_rate"
            onChange={e => handleInputFormChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12} justify="flex-end" container>
            <Button onClick={handleReset} className={classes.buttonClose}  >
                Close
            </Button>
            <Button onClick={handleFormSubmit} className={classes.button} variant="contained" color="primary">
                Calculate
            </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}