import * as React from "react";
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
const items: IProduct[] = [
  {
    name: "Product 1",
    details: "A nice thing",
    price: 9,
  },
  {
    name: "Product 2",
    details: "Another thing",
    price: 3,
  },
  {
    name: "Product 3",
    details: "Something else",
    price: 6,
  },
  {
    name: "Product 4",
    details: "Best thing of all",
    price: 14,
  },
  { name: "Shipping", details: "", price: 10 },
];
const products = [
  {
    name: "Product 1",
    desc: "A nice thing",
    price: "$9.99",
  },
  {
    name: "Product 2",
    desc: "Another thing",
    price: "$3.45",
  },
  {
    name: "Product 3",
    desc: "Something else",
    price: "$6.51",
  },
  {
    name: "Product 4",
    desc: "Best thing of all",
    price: "$14.11",
  },
];
const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.price} />
            <Grid item xs={12} sm={8}>
              <ListItem key={1} component="div">
                <IconButton size="large" sx={{ my: 0, px: 1 }}>
                  <Add fontSize="small" />
                </IconButton>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  1
                </Typography>
                <IconButton size="large">
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
            $34.06
          </Typography>
        </ListItem>
      </List>

      <Cart items={items} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
