import { StackNavigationProp } from "@react-navigation/stack";

import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  CreatePayment: undefined;
  SharePayment: { total: number , webUrl:string , identifier:string , fiat:string};
  QRPayment: {  webUrl:string , total:number,paymentStatus:string | null };
  SuccessPayment:undefined
};

export type CreatePaymentScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  "CreatePayment"
>;

export type SharePaymentScreenRouteProp = RouteProp<
  RootStackParamList,
  "SharePayment"
>;

export type SharePaymentScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  "SharePayment"
  >;

export type SuccessPaymentScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  "CreatePayment"
  >;