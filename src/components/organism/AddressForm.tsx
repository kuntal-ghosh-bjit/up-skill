import React, { Dispatch } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Input } from "@/components/atoms/input/input";
import { OrderContext } from "@/contexts/OrderContext";
import { IOrder } from "@/model/order";

type AddressFormProps = {
  order: IOrder;
  dispatch: Dispatch<any>;
};

export default function AddressForm({ order, dispatch }: AddressFormProps) {
  const handleChange = (e: React.ChangeEvent<any>) => {
    console.log("event", e.target.name);
    const { name, value } = e.target;
    dispatch && dispatch({ type: "firstName", payload: value });
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Input
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            defaultValue={order?.firstName}
            value={order?.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            defaultValue={order?.lastName}
            value={order?.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            defaultValue={order?.address}
            value={order?.address}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
