import React, { Dispatch } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Input } from "@/components/atoms/input/input";
import { OrderContext } from "@/contexts/OrderContext";
import { IOrder, OrderAction, OrderActionKind } from "@/model/order";
import { useForm } from "@/hooks/useForm";

type AddressFormProps = {
  order: IOrder;
  dispatch?: Dispatch<any>;
};

export default function AddressForm({ order }: AddressFormProps) {
  const { formState, dispatch } = useForm<IOrder, OrderAction>();
  console.log("formState", formState);
  console.log("order", order);

  const handleChange = (e: React.ChangeEvent<any>) => {
    console.log("event", e.target.name);
    try {
      const { name, value } = e.target;
      dispatch({ type: name, payload: value });
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log("formState", formState);
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
            defaultValue={formState?.firstName}
            value={formState?.firstName}
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
            defaultValue={formState?.lastName}
            value={formState?.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            defaultValue={formState?.address}
            value={formState?.address}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            defaultValue={formState?.city}
            value={formState?.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            defaultValue={formState?.country}
            value={formState?.country}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
