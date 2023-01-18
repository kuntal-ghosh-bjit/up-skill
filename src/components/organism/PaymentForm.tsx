import React, { Dispatch } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { IOrder, OrderAction } from "@/model/order";
import { useForm } from "@/hooks/useForm";

type AddressFormProps = {
  order: IOrder;
  dispatch?: Dispatch<any>;
};

export default function PaymentForm() {
  const { formState: order, dispatch } = useForm<IOrder, OrderAction>();

  const handleChange = (e: React.ChangeEvent<any>) => {
    try {
      const { name, value } = e.target;
      dispatch({ type: name, payload: value });
    } catch (error) {}
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            name="nameOnCard"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            defaultValue={order?.paymentInfo?.nameOnCard}
            value={order?.paymentInfo?.nameOnCard}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            name="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            defaultValue={order?.paymentInfo?.cardNumber}
            value={order?.paymentInfo?.cardNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expiryDate"
            name="expiryDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            defaultValue={order?.paymentInfo?.expiryDate}
            value={order?.paymentInfo?.expiryDate}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            name="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            defaultValue={order?.paymentInfo?.cvv}
            value={order?.paymentInfo?.cvv}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
