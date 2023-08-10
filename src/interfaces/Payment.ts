import { CreatePaymentScreenNavigationProps, SharePaymentScreenNavigationProps } from "./PaymentTypes";

export interface CreatePaymentScreenProps {
    navigation: CreatePaymentScreenNavigationProps;
  }

  export interface SharePaymentScreenProps {
    navigation: SharePaymentScreenNavigationProps;
  }

  export interface SuccessPaymentScreenProps {
    navigation: SharePaymentScreenNavigationProps;
  }
  export interface QRPaymentScreenProps {
    route:any
    navigation: SharePaymentScreenNavigationProps;
  }



  interface CurrencySymbols {
    [key: string]: string;
  }
  
  export const currencies: CurrencySymbols = {
    EUR: '€',
    USD: '$',
    GBP: '£',
    ARS: '$',
    AUD: '$',
    BGN: 'лв',
    BOB: '$b',
    BRL: 'R$',
    CAD: '$',
    CHF: 'CHF',
    CLP: '$',
    COP: '$',
    DKK: 'kr',
    DOP: 'RD$',
    GEL: '₾',
    HUF: 'Ft',
    ISK: 'kr',
    JPY: '¥',
    KRW: '₩',
    MXN: '$',
    NOK: 'kr',
    NZD: '$',
    PEN: 'S/',
    PLN: 'zł',
    PYG: '₲',
    RON: 'lei',
    SEK: 'kr',
    SGD: '$',
    SVC: '$',
    UYU: '$U',
  };