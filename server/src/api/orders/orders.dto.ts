export interface orderListDto {
  id: string;
  guestUserName: string;
  guestUserPhone: string;
  typeOfDelivery: string;
  guestUserAddress: string | null;
  typeOfPayment: string;
  imageVoucher: string | null;
  notes: string | null;
  total: number;
  status: string;
}

export interface orderedProduct {
  id: string,
  quantity: number
  price: number
}