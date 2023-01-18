import localFont from "@next/font/local";
import Checkout from "@/components/organism/Checkout";
import { Dispatch, useReducer, useState } from "react";
import { IOrder, OrderActionKind } from "@/model/order";
import { OrderContext } from "@/contexts/OrderContext";
import { FormContext } from "@/contexts/formContext";
import { IProduct } from "@/model/product";

// const myFont = localFont({ src: "./" });
// An enum with all the types of actions to use in our reducer

// An interface for our actions
interface OrderAction {
  type: OrderActionKind;
  payload: any;
}

function reducer(state: IOrder, { type, payload }: OrderAction): IOrder {
  switch (type) {
    case OrderActionKind.FIRSTNAME:
      return { ...state, firstName: payload };
    case OrderActionKind.LASTNAME:
      return { ...state, lastName: payload };
    case OrderActionKind.ADDRESS:
      return { ...state, address: payload };
    case OrderActionKind.city:
      return { ...state, city: payload };
    case OrderActionKind.country:
      return { ...state, country: payload };
    case OrderActionKind.nameOnCard:
      return {
        ...state,
        paymentInfo: { ...state.paymentInfo, nameOnCard: payload },
      };
    case OrderActionKind.cardNumber:
      return {
        ...state,
        paymentInfo: { ...state.paymentInfo, cardNumber: payload },
      };
    case OrderActionKind.expiryDate:
      return {
        ...state,
        paymentInfo: { ...state.paymentInfo, expiryDate: payload },
      };
    case OrderActionKind.expiryDate:
      return { ...state, paymentInfo: { ...state.paymentInfo, cvv: payload } };
    case OrderActionKind.addProduct:
      console.log("payload", payload);
      let selectedProduct: any = state.products.map((product) => {
        console.log(" product?.quantity before", product?.quantity);

        if (product.id === payload && product?.quantity) {
          product.quantity = product?.quantity + 1;
          console.log(" product?.quantity after", product?.quantity);
        }
        return { ...product };
      });
      console.log("selectedProduct", selectedProduct);
      return {
        ...state,
        paymentInfo: { ...state.paymentInfo },
        products: [...selectedProduct],
      };
    case OrderActionKind.deleteProduct:
      console.log("payload", payload);
      let sProduct: any = state.products.map((product) => {
        console.log(" product?.quantity before", product?.quantity);

        if (product.id === payload && product?.quantity) {
          product.quantity = product?.quantity - 1;
          console.log(" product?.quantity after", product?.quantity);
        }
        return { ...product };
      });
      console.log("sProduct", sProduct);
      return {
        ...state,
        paymentInfo: { ...state.paymentInfo },
        products: [...sProduct],
      };
    default:
      return { ...state };
  }
}

export default function Home() {
  const [state, dispatch] = useReducer<any, any>(reducer, {}, () => {
    return {
      products: [
        {
          id: "1",
          name: "Orange",
          price: 150,
          details: "orange",
          quantity: 5,
        },
        {
          id: "2",
          name: "Apple",
          price: 250,
          details: "Apple",
          quantity: 50,
        },
        {
          id: "3",
          name: "Mango",
          price: 500,
          details: "Mango",
          quantity: 15,
        },
      ],
    };
  });
  console.log("initial value", state);

  const value = {
    state,
    dispatch,
  };
  interface FormValues {
    name: string;
    email: string;
  }
  return (
    <FormContext.Provider
      value={{
        formState: state,
        dispatch,
      }}
    >
      <Checkout />
    </FormContext.Provider>
  );
}
