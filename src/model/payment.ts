export interface IPaymentInfo {
  id?: string;
  paymentMode: "CARD" | "MFS" | "COD";
  userId: string;
  nameOnCard: string;
  cardNumber: number;
  expiryDate: Date;
  cvv: string;
}
