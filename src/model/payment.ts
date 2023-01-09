export interface IPaymentInfo {
  id?: string;
  paymentMode: "CARD" | "MFS" | "COD";
  userId: string;
  nameOnCard: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}
