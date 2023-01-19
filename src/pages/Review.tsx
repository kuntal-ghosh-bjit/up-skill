import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Cart from "@/components/molecules/cart/cart";
import { IProduct } from "@/model/product";
import { Button, IconButton, ListItemButton } from "@mui/material";
import Add from "@mui/icons-material/Add";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { useForm } from "@/hooks/useForm";
import { IOrder, OrderAction, OrderActionKind } from "@/model/order";
const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

export default function Review() {
  const { formState, dispatch } = useForm<IOrder, OrderAction>();
  console.log("formState", formState);

  const handleClick = React.useCallback((productId: string) => {
    console.log("productId", productId);

    dispatch({ type: OrderActionKind.addProduct, payload: productId });
  }, []);
  const handleDelete = React.useCallback((productId: string) => {
    console.log("productId", productId);

    dispatch({ type: OrderActionKind.deleteProduct, payload: productId });
  }, []);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {formState?.products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.price} />
            <Grid item xs={12} sm={8}>
              <ListItem key={1} component="div">
                <IconButton
                  size="large"
                  sx={{ my: 0, px: 1 }}
                  onClick={() => handleDelete(product?.id!)}
                >
                  <MinimizeIcon fontSize="small" />
                </IconButton>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  {product?.quantity}
                </Typography>
                <IconButton
                  size="large"
                  onClick={() => handleClick(product?.id!)}
                >
                  <Add fontSize="small" />
                </IconButton>
              </ListItem>
            </Grid>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total=" />
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, py: 0, px: 5 }}
          >
            =
            {formState.products.reduce(
              (total, product) => total + product?.price! * product?.quantity!,
              0
            )}
          </Typography>
        </ListItem>
      </List>

      {/* <Cart items={items} /> */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Grid container>
            <React.Fragment key={formState.id}>
              <Grid item xs={6}>
                <Typography gutterBottom>Name</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>
                  {formState?.firstName + " " + formState?.lastName}
                </Typography>
              </Grid>
            </React.Fragment>
          </Grid>
          <Grid container>
            <React.Fragment key={formState.id}>
              <Grid item xs={6}>
                <Typography gutterBottom>Address</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{formState?.address}</Typography>
              </Grid>
            </React.Fragment>
          </Grid>{" "}
          <Grid container>
            <React.Fragment key={formState.id}>
              <Grid item xs={6}>
                <Typography gutterBottom>City</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{formState?.city}</Typography>
              </Grid>
            </React.Fragment>
          </Grid>{" "}
          <Grid container>
            <React.Fragment key={formState.id}>
              <Grid item xs={6}>
                <Typography gutterBottom>Country</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{formState?.country}</Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            <React.Fragment key={formState.id}>
              <Grid item xs={6}>
                <Typography gutterBottom>Name On Card</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>
                  {formState.paymentInfo?.nameOnCard}
                </Typography>
              </Grid>
            </React.Fragment>
          </Grid>
          <Grid container>
            <React.Fragment key={formState.id}>
              <Grid item xs={6}>
                <Typography gutterBottom>Card Number</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>
                  {formState.paymentInfo?.cardNumber}
                </Typography>
              </Grid>
            </React.Fragment>
          </Grid>{" "}
          <Grid container>
            <React.Fragment key={formState.id}>
              <Grid item xs={6}>
                <Typography gutterBottom>Expiry Date</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>
                  {formState.paymentInfo?.expiryDate}
                </Typography>
              </Grid>
            </React.Fragment>
          </Grid>{" "}
          <Grid container>
            <React.Fragment key={formState.id}>
              <Grid item xs={6}>
                <Typography gutterBottom>CVV NO:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>
                  {formState.paymentInfo?.cvv}
                </Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
